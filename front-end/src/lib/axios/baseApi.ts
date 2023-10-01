import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'http://localhost:3200/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
