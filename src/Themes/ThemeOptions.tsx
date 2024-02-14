import createTheme, { Theme, ThemeOptions } from "@mui/material/styles/createTheme";

export const DarkThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            light: '#009cf9',
            main: '#0083f9',
            dark: '#003F8A',
            contrastText: '#fff'
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
            default: '#303030',
            paper: '#424242',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
        divider: '#424242',

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
            dark: '#003F8A',
            contrastText: '#000000'
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
            default: '#FFFFFF',
            paper: '#F5F5F5',
        },
        text: {
            primary: '#000000',
            secondary: '#000000',
        },
        divider: '#F5F5F5',
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