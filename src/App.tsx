import { Header } from '@/shared/components';
import { Home, NotFound } from './modules';
import { Route, Routes } from 'react-router-dom';
import useLocalizeDocumentAttributes from '@/shared/hooks/useLocalizeDocumentAttributes';

export default function App() {
  useLocalizeDocumentAttributes();
  return (
    <>
    <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
