import axios from 'axios';
// import router from './router';

// 配置api地址
axios.defaults.baseURL = '/api';

// //请求拦截，所有发起请求都会先处理下面的代码
// axios.interceptors.request.use(config => {
//   if (localStorage.wxToken) {
//     config.headers.Authorization = localStorage.wxToken;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// })
// // 响应拦截
// axios.interceptors.response.use(response => {
//   return response;
// }, error => {
//   const { status } = error.response;
//   if (status == 401) {
//     alert('token过期，请重新登录')
//     // 跳转到登录页
//     router.push('/login')
//     localStorage.removeItem('wxToken')
//   }
//   return Promise.reject(error)
// })

export default axios;