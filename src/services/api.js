import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.20.105:333',
});

export default api;
