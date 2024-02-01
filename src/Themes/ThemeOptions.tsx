import createTheme, { Theme, ThemeOptions } from "@mui/material/styles/createTheme";

export const DarkThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#0083f9',
            light: '#009cf9',
            dark: '#0056a4',
        },
        secondary: {
            main: '#b15de6',
        },
        error: {
            main: '#ff1706',
        },
        warning: {
            main: '#ff7700',
        },
        success: {
            main: '#4f9050',
        },
        background: {
            default: 'rgba(39,39,39,0.96)',
            paper: '#191919',
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: ['Ruda', 'Arial', 'sans-serif'].join(','),
    },
};

export const LightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#0083f9',
            light: '#009cf9',
            dark: '#0056a4',
        },
        secondary: {
            main: '#b15de6',
        },
        error: {
            main: '#ff1706',
        },
        warning: {
            main: '#ff7700',
        },
        success: {
            main: '#4f9050',
        },
        background: {
            default: 'rgb(216, 216, 216)',
            paper: 'rgb(230, 230, 230)',
        },
    },
    shape: {
        borderRadius: 4,
    },
    typography: {
        fontFamily: ['Ruda', 'Arial', 'sans-serif'].join(','),
    },
};

export const convertToTheme = (themeOptions: ThemeOptions): Theme => {
    const theme = createTheme(themeOptions);
        return theme;
};

