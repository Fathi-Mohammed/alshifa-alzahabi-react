import { AboutUs } from './components/AboutUs';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { tabTitle } from '@/shared/utils/tabTitle';

export const Home = () => {
  
  tabTitle('الرئيسية');

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
    </>
  );
};