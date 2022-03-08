import { ComponentType, lazy, Suspense } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { set } from 'lodash-es';

const generatePathConfig = (): Record<string, any> => {
  const modules = import.meta.glob('/src/pages/**/*.{ts,tsx}');
  const pathConfig = {};
  Object.keys(modules).forEach((filePath) => {
    const routerPath = filePath
      .replace('/src/pages/', '')
      .replace(/.tsx?/, '')
      .replace(/\[([\w-]+)]/, ':$1')
      .split('/');
    set(pathConfig, routerPath, modules[filePath]);
  });
  return pathConfig;
};

const wrapSuspense = (importer: () => Promise<{ default: ComponentType }>) => {
  if (!importer) {
    return undefined;
  }
  const Component = lazy(importer);
  // 结合 Suspense，这里可以自定义 loading 组件
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

const mapPathConfigToRoute = (
  pathConfig: Record<string, any>,
): RouteObject[] => {
  return Object.entries(pathConfig).map(([routerPath, child]) => {
    if (typeof child === 'function') {
      // 等于 index 则映射为当前根路由
      const isIndex = routerPath === 'index';
      return {
        index: isIndex,
        path: isIndex ? undefined : routerPath,
        // 转换为组件
        element: wrapSuspense(child),
      };
    }

    const { ...rest } = child;
    return {
      path: routerPath,
      children: mapPathConfigToRoute(rest),
    };
  });
};

const generateRouteConfig = (): RouteObject[] => {
  const { _layout, _error, ...pathConfig } = generatePathConfig();
  // 提取路由的layout、error
  return [
    {
      path: '/',
      element: wrapSuspense(_layout),
      children: mapPathConfigToRoute(pathConfig),
    },
    {
      path: '*',
      element: wrapSuspense(_error),
    },
  ];
};

const routeConfig = generateRouteConfig();

export default () => useRoutes(routeConfig);
