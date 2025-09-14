import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Function to apply theme class before rendering
const applyInitialTheme = () => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  
  // Remove any existing theme classes
  root.classList.remove('light', 'dark');
  
  // Apply saved theme or default to dark
  if (savedTheme === 'light') {
    root.classList.add('light');
  } else {
    root.classList.add('dark');
  }
};

// Apply theme before rendering the app
applyInitialTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
