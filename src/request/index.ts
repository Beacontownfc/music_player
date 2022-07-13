import axios from 'axios';

const request = axios.create({
  timeout: 6000,
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
