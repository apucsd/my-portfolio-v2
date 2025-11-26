import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './route';
import ClientProvider from './provider/ClientProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClientProvider>
      <RouterProvider router={router} />
    </ClientProvider>
  </StrictMode>
);
