import axios from 'axios';
import { BASE_URL } from './constant';


const axiosInstance = axios.create();

// axios defaults
// axiosInstance.defaults.baseURL = store.getState().login.baseUrl;
// interceptors
// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    config.baseURL = BASE_URL
    if (config.headers['Authorization']) {
      config.headers['Authorization'] = null;
    }

    if (config.params) {
      for (const key of Object.keys(config.params)) {
        if (config.params[key] === '') {
          delete config.params[key];
        } else if (typeof config.params === 'string') {
          // @ts-ignore
          config.params[key].trim();
        }
      }
    }

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(function (response) {
  return response;
});

export default axiosInstance;