export interface ICustomTheme {
    palette: {
        mode: 'dark' | 'light';
        primary: {
            main: string;
            contrastText: string;
        };
        secondary: {
            main: string;
        };
        error: {
            main: string;
        };
        warning: {
            main: string;
        };
        success: {
            main: string;
        };
        background: {
            default: string;
            paper: string;
            card: string;
        };
        text: {
            primary: string;
            secondary: string;
        };
        divider: string;
    };
    shape: {
        borderRadius: number;
    };
    typography: {
        fontFamily: string;
    };
}