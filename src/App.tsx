// App.tsx
import AppRoutes from './Routes/AppRoutes';
import { ProductProvider } from './Contexts/ProductContext';
import { UserProvider } from './Contexts/UserContext';
import { CartProvider } from './contexts/CartContext';

function App() {

  return (
    <UserProvider>
        <CartProvider>
      <ProductProvider>
          <AppRoutes />
      </ProductProvider>
        </CartProvider>
    </UserProvider>
  );
}

export default App;
