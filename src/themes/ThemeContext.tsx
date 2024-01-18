// ThemeContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import theme from './theme';

interface ThemeContextProps {
    children: ReactNode;
}

interface ThemeContextValue {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const selectedTheme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: theme.palette.primary,
            secondary: theme.palette.secondary,
            background: theme.palette.background,
        },
    });

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <MuiThemeProvider theme={selectedTheme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext deve ser usado dentro de um ThemeProvider');
    }
    return context;
};

export { ThemeProvider, useThemeContext };
