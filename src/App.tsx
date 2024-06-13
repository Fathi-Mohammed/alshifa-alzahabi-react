import { Footer, Header, PrivateRoute } from '@/shared/components';
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
  ShareOrder,
} from './modules';
import { Route, Routes } from 'react-router-dom';
import useLocalizeDocumentAttributes from '@/shared/hooks/useLocalizeDocumentAttributes';
import { tabIcon } from './shared/utils/tabIcon';
import TabIcon from '@/assets/images/logo.png';
import { ToastContainer } from 'react-toastify';
import { Payment } from './modules/Payment';
import { PaymentForm } from './modules/PaymentForm';
import { useAuth } from './shared/context/AuthProvider';
export default function App() {
  tabIcon(TabIcon);
  useLocalizeDocumentAttributes();

  const { loading } = useAuth();

  if (loading) return;

  return (
    <>
      {!loading && (
        <>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
          />
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
            <Route path="/multi-step/:serviceId" element={<MultiStepForm />} />
            <Route
              path="/multi-step/:serviceId/share/:orderId"
              element={<ShareOrder />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment/:serviceId" element={<PaymentForm />} />
            <Route element={<PrivateRoute />}></Route>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}
