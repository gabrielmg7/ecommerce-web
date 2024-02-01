// App.tsx
import AppRoutes from './Routes/AppRoutes';
import { ProductProvider } from './Contexts/ProductContext';
import GradientBackground from './Themes/Background/GradientBackground';

function App() {

  return (
    <GradientBackground>
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
      </GradientBackground>
      );
}

      export default App;
