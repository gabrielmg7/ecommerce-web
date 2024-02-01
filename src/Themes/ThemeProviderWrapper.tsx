import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { convertToTheme, LightThemeOptions } from './ThemeOptions';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProviderWrapper: React.ComponentType<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(convertToTheme(LightThemeOptions));

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return convertToTheme({
                ...prevTheme,
                palette: {
                    ...prevTheme.palette,
                    mode: prevTheme.palette.mode === 'light' ? 'dark' : 'light',
                },
            });
        });
        return theme;
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
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
