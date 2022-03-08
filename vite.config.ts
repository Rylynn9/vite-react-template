/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import vitePluginImport from 'vite-plugin-babel-import';

// https://vitejs.dev/config/
export default defineConfig({
  // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  // clearScreen: false,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // additionalData: `@import "${resolve(__dirname, 'src/theme.module.less')}";`,
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react(),
    vitePluginImport([
      {
        libraryName: 'antd-mobile',
        libraryDirectory: '2x/es/components',
        ignoreStyles: [''],
      },
      {
        libraryName: 'ahooks',
        libraryChangeCase: (name) => `es/${name}`,
        ignoreStyles: [''],
      },
    ]),
  ],
  server: {
    // https: true,
    proxy: {
      '/api': {
        target: process.env.VITE_REQUESET_REQUESET_DOMIN,
        changeOrigin: true,
      },
    },
  },
  test: {
    global: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
