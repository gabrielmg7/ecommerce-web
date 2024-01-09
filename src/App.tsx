import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";

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
