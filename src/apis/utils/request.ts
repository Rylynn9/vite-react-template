// import { navigateTo } from 'remax/one';
// import { showLoading, hideLoading, axios, showToast } from '@kqinfo/ui';
// import { REQUEST_QUERY, PLATFORM } from '@/config/constant';
// import storage from '@/utils/storage';
// import { getCurrentPageUrl, jsonToQueryString, reLaunchUrl } from '@/utils';
// import qs from 'qs';
// import axios from 'axios';

// /** 如果为true则无需跳转 */
// let navFlag = false;
// const NODE_ENV = process.env.NODE_ENV;
// const DOMIN = process.env.REMAX_APP_REQUESET_DOMIN;
// const instance = axios.create({
//   baseURL: NODE_ENV === 'development' && PLATFORM === 'web' ? '' : DOMIN,
//   headers: {
//     'Content-Type': 'application/json;charset=UTF-8',
//   },
//   method: 'POST',
// });

// // /** 请求拦截器 */
// instance.interceptors.request.use(
//   (config: {
//     headers: { [x: string]: string };
//     url: string | string[];
//     data: any;
//   }) => {
//     if (!config.headers['x-loading']) {
//       showLoading({
//         title: '加载中',
//       });
//     }

//     if (config.url) {
//       const params = qs.stringify({
//         ...REQUEST_QUERY,
//       });
//       config.data = {
//         ...config.data,
//         ...REQUEST_QUERY,
//       };
//       config.url = `${config.url}${
//         config.url.indexOf('?') > -1 ? '&' : '?'
//       }${params}`;
//       if (
//         config.headers['Content-Type'] ===
//           'application/x-www-form-urlencoded;charset=UTF-8' &&
//         PLATFORM === 'web'
//       ) {
//         config.data = jsonToQueryString(config.data);
//       }
//     }
//     const login_access_token = storage.get('login_access_token');
//     if (login_access_token) {
//       config.headers['Authorization'] = `Bearer ${login_access_token}`;
//     }
//     console.log('请求入参: ', config);
//     return config;
//   },
// );

// // /** 响应拦截器 */
// instance.interceptors.response.use(
//   (response) => {
//     hideLoading();
//     const { data, status } = response as API.ResponseModel;
//     if (status >= 200 && status < 300) {
//       if (data.code !== 0) {
//         showToast({
//           icon: 'fail',
//           title: data.msg || '请求失败',
//         });
//       }
//     } else {
//       showToast({
//         icon: 'fail',
//         title: data.msg || '网络请求失败',
//       });
//     }
//     console.log('请求出参: ', response.data);
//     return response;
//   },
//   () => {
//     showToast({
//       icon: 'fail',
//       title: '网络发生错误，请稍后重新操作!',
//     });
//   },
// );

// export default instance;
export default () => '1';
