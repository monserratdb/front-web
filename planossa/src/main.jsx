import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import AuthProvider from './auth/AuthProvider';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
