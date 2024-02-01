import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { convertToTheme, DarkThemeOptions, LightThemeOptions } from './ThemeOptions';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const selectedTheme = darkMode ? convertToTheme(DarkThemeOptions) : convertToTheme(LightThemeOptions);

    return (
        <ThemeContext.Provider value={{ theme: selectedTheme, toggleTheme }}>
            <ThemeProvider theme={selectedTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProviderWrapper');
    }
    return context;
};
