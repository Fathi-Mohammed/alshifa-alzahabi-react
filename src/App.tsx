import { Footer, Header } from '@/shared/components';
import {
  Home,
  AboutUs,
  NotFound,
  Services,
  ContactUs,
  Blog,
  Topic,
  MultiStepForm,
  Auth,
} from './modules';
import { Route, Routes } from 'react-router-dom';
import useLocalizeDocumentAttributes from '@/shared/hooks/useLocalizeDocumentAttributes';
import { tabIcon } from './shared/utils/tabIcon';
import TabIcon from '@/assets/images/logo.png';

export default function App() {
  tabIcon(TabIcon);
  useLocalizeDocumentAttributes();
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Topic />} />
        <Route path="/multi-step" element={<MultiStepForm />} />
      </Routes>
      <Footer />
    </>
  );
}
