import axios from 'axios';

import { useAuthStore } from '../stores/AuthStore';

export const BASE_URL = 'https://api2.tourlink.com.br';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await useAuthStore.getState().getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
