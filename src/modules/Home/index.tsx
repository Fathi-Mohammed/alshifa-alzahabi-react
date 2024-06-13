import { useTranslation } from 'react-i18next';
import { AboutUs } from './components/AboutUs';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { tabTitle } from '@/shared/utils/tabTitle';
import { message } from 'antd';
import { Loader } from '@/shared/components/Loader';
import useApi from '@/shared/hooks/useApi';

export const Home = () => {
  const { t } = useTranslation();
  tabTitle(t('Home'));

  const { VITE_HOME } = import.meta.env;

  const {
    isLoading,
    isError,
    error,
    data: res,
    isRefetching,
  }: any = useApi.get(VITE_HOME);

  const data = res?.data;
  if (isError) message.error(error.message);
  if (isLoading || isRefetching)
    return <Loader visible={isLoading || isRefetching} />;

  return (
    <>
      {(data?.sliders ?? []).length > 0 && <Hero data={data?.sliders} />}
      {data?.about && <AboutUs data={data?.about} />}
      {(data?.services ?? []).length > 0 && <Services data={data?.services} />}
    </>
  );
};
