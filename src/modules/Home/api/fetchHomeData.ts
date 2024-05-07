import { HOME, baseURL } from '@/shared/api/Api';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const fetchHomeData = async () => {
  try {
    const res = await axios.get(baseURL + HOME);
    return res.data;

  } catch (error) {
    console.log(error);
  }
}

export const useHomeData = () =>{
  return useQuery({
    queryKey: ['home'],
    queryFn: fetchHomeData,
  });
}
