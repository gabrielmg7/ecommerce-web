import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./Routes/AppRoutes";

function App() {

  const theme = createTheme();


  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App;
