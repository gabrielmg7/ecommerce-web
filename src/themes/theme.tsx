// theme.tsx
import { PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

interface ThemePalette {
    mode: PaletteMode;
    primary: {
        main: string;
    };
    secondary: {
        main: string;
    };
    background: {
        default: string;
    };
}

interface ThemeOptions {
    lightPalette: ThemePalette;
    darkPalette: ThemePalette;
}

const generateTheme = (palette: ThemePalette): Theme => {
    return createTheme({
        palette: {
            mode: palette.mode as PaletteMode,
            primary: palette.primary,
            secondary: palette.secondary,
            background: palette.background,
        },
    });
};

const commonPalette: ThemePalette = {
    primary: {
        main: '#2196f3',
    },
    secondary: {
        main: '#f50057',
    },
    background: {
        default: '',
    },
    mode: 'light'
};

const lightPalette: ThemePalette = {
    ...commonPalette,
    mode: 'light',
    background: {
        default: '#fff',
    },
};

const darkPalette: ThemePalette = {
    ...commonPalette,
    mode: 'dark',
    background: {
        default: '#121212',
    },
};

const themeOptions: ThemeOptions = {
    lightPalette,
    darkPalette,
};

const theme = generateTheme(themeOptions.lightPalette);

export default theme;
