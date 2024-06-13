import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthProvider';
import { useEffect } from 'react';

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + '/api/front',
});

const AxiosConfig = () => {
  const { i18n } = useTranslation();
  const { user } = useAuth();

  useEffect(() => {
    const requestInterceptor = Axios.interceptors.request.use((config) => {
      if (user) {
        config.headers['Authorization'] = `Bearer ${user?.access_token}`;
      }
      config.headers['lang'] = i18n.language;

      return config;
    });

    return () => {
      Axios.interceptors.request.eject(requestInterceptor);
    };
  }, [i18n.language, user]);

  return null;
};

export { Axios, AxiosConfig };
