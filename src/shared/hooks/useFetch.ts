import { useQuery } from '@tanstack/react-query';
import Axios from '../services/Axios';
import { useTranslation } from 'react-i18next';

const fetchData = async (endpoint: string, options?: any) => {
  const response = await Axios.get(endpoint, options);
  return response.data;
};

const useFetch = (endpoint: string, options?: any) => {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: [endpoint],
    queryFn: () =>
      fetchData(endpoint, {
        headers: {
          lang: i18n.language,
        },
        ...options,
      }),
    refetchOnWindowFocus: false,
  });
};

export default useFetch;
