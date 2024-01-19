// App.tsx
import { ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './Routes/AppRoutes';
import { ProductProvider } from './Contexts/ProductContext';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
