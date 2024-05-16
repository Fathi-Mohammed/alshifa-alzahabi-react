import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './theme/index.scss';
import '@/shared/services/i18n/config.ts';
import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { ConfigProvider } from 'antd';
import { antTheme } from './theme/antTheme';
import { LanguageProvider } from './shared/context/languageContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={antTheme}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
          <ScrollToTop />
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-right"
          />
        </ConfigProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
