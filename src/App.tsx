// App.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './Routes/AppRoutes';
import { AdminProvider } from './Contexts/AdminContext';
import { UserProvider } from './Contexts/UserContext';
import { ProductProvider } from './Contexts/ProductContext';

function App() {
  const theme = createTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <AdminProvider>
            <ProductProvider>
              <AppRoutes />
            </ProductProvider>
          </AdminProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
