import createTheme, { Theme, ThemeOptions } from "@mui/material/styles/createTheme";
import { ICustomTheme } from "./ICustomTheme";



export const DarkThemeOptions: ICustomTheme = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#009cf9',
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
            card: '#686868'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#cccccc',
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

export const LightThemeOptions: ICustomTheme = {
    palette: {
        mode: 'light',
        primary: {
            main: '#0083f9',

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
            paper: '#FFFFFF',
            default: '#f2f3f4',
            card: '#FAFAFB'
            
        },
        text: {
            primary: '#000000',
            secondary: '#4c4c4c',
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