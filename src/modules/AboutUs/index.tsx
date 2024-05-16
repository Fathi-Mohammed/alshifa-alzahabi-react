import { tabTitle } from '@/shared/utils/tabTitle';
import { Features } from './components/Features';
import { Hero } from './components/Hero';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
import { Loader } from '@/shared/components/Loader';
import { ABOUT } from '@/shared/services/api/Api';
import { useEffect } from 'react';
import useFetch from '@/shared/hooks/useFetch';


export const AboutUs = () => {
  const { t , i18n } = useTranslation();
  tabTitle(t("AboutUs"));

  const { isLoading, isError, error, data: res , isRefetching, refetch} = useFetch(ABOUT); 

  useEffect(() => {
    refetch();
  }, [i18n.language]);

  const data = res?.data;
  if (isError) message.error(error.message);
  if (isLoading || isRefetching) return <Loader visible={isLoading || isRefetching} />;

  return (
    <>
      {data && <Hero data={data} />}
      {data?.sections.length > 0 && <Features data={data?.sections} />}
    </>
  );
};
