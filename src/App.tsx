// App.tsx
import AppRoutes from './routes/AppRoutes';
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
