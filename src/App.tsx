// App.tsx
import AppRoutes from './Routes/AppRoutes';
import { ProductProvider } from './Contexts/ProductContext';
import { UserProvider } from './Contexts/UserContext';
import { CarrinhoProvider } from './contexts/CartContext';

function App() {

  return (
    <UserProvider>
      <ProductProvider>
        <CarrinhoProvider>
          <AppRoutes />
        </CarrinhoProvider>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
