import axios from 'axios';

const request = axios.create({
  timeout: 6000,
  baseURL: 'http://localhost:8050',
});

request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

export default request;
