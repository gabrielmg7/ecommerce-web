import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./Routes/appRoutes";

function App() {

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <AppRoutes />
      </div>
    </ThemeProvider>
  )
}

export default App;
