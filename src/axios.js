import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

instance.interceptors.request.use((config) => {
  const configs = config;
  if (configs.url.includes('login')) {
    return configs;
  }
  configs.params = {
    ...configs.params,
    appkey: 'wuliang_1620376130241',
  };
  return configs;
}, (error) => Promise.reject(error));

instance.interceptors.response.use((response) => {
  if (response.status === 200 && response.data.msg === '登陆成功') {
    return response.data.data;
  }
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;
