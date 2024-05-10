import { Footer, Header } from '@/shared/components';
import {
  Home,
  AboutUs,
  NotFound,
  Services,
  ContactUs,
  Blog,
  Topic,
} from './modules';
import { Route, Routes } from 'react-router-dom';
import useLocalizeDocumentAttributes from '@/shared/hooks/useLocalizeDocumentAttributes';
import { AuthRoutes } from '@/modules/Auth/routes/authRoutes';

export default function App() {
  useLocalizeDocumentAttributes();
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Topic />} />
      </Routes>
      <Footer />
    </>
  );
}
