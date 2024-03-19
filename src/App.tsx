// App.tsx
import AppRoutes from './Routes/AppRoutes';
import { ProductProvider } from './Contexts/ProductContext';
import { UserProvider } from './Contexts/UserContext';

function App() {

  return (
    <UserProvider>
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
