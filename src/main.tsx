// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './Contexts/UserContext.tsx';
import { ThemeProviderWrapper } from './Themes/ThemeProviderWrapper.tsx';
import Background from './Components/Utils/Background/Background.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderWrapper>
      <Router>
        <UserProvider>
          <Background>
            <App />
          </Background>
        </UserProvider>
      </Router>
    </ThemeProviderWrapper>

  </React.StrictMode>,
);