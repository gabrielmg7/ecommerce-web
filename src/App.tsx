// App.tsx
import AppRoutes from './Routes/AppRoutes';
import { ProductProvider } from './Contexts/ProductContext';

function App() {

  return (
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
      );
}

      export default App;
