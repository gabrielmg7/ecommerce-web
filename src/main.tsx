// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext.tsx';
import { AdminProvider } from './Contexts/AdminContext.tsx';
import { ThemeProviderWrapper } from './Themes/ThemeProviderWrapper.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <Router>
        <UserProvider>
          <AdminProvider>
            <App />
          </AdminProvider>
        </UserProvider>
      </Router>
    </ThemeProviderWrapper>
  </React.StrictMode>,
);
