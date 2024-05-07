import { Footer, Header } from '@/shared/components';
import { Home, NotFound } from './modules';
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
      </Routes>
      <Footer />
    </>
  );
}
