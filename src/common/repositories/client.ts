import axios from 'axios';

export const BASE_URL = 'http://104.236.219.8:8081';

export const api = axios.create({
  baseURL: BASE_URL,
});
