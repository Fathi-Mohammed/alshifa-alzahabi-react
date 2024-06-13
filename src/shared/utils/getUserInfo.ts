import { useEffect } from 'react';
import useApi from '../hooks/useApi';
import { useAuth } from '@/shared/context/AuthProvider';
import { getCookie } from './cookie';

export const getUserInfo = () => {
  const { setUser } = useAuth();
  const token = getCookie('auth_token');

  const { data, isSuccess }: any = useApi.get(import.meta.env.VITE_PROFILE);

  useEffect(() => {
    if (isSuccess) {
      setUser({ ...data.data, access_token: token });
    }
  }, [data, setUser, token]);
};
