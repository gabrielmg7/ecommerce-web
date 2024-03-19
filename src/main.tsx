// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext.tsx';
import { ThemeProviderWrapper } from './Themes/ThemeProviderWrapper.tsx';
import Background from './Components/Utils/Background.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        <ThemeProviderWrapper>
          <Background>
            <App />
          </Background>
        </ThemeProviderWrapper>
    </Router>

  </React.StrictMode>,
);