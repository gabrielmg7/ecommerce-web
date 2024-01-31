import { createTheme } from "@mui/material/styles";

const lightPalette = {
  primary: {
    main: "#2196F3",
  },
  secondary: {
    main: "#FF4081",
  },
};

const darkPalette = {
  primary: {
    main: "#64B5F6",
  },
  secondary: {
    main: "#FF80AB",
  },
};

const commonThemeOptions = {
  // Outras opções comuns do tema podem ser adicionadas aqui
};

export const lightTheme = createTheme({
  palette: lightPalette,
});

export const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: darkPalette,
});
