import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./Routes/AppRoutes";
import { AdminProvider } from "./Contexts/AdminContext";
import { UserProvider } from "./Contexts/UserContext";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const theme = createTheme();


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <UserProvider>
            <AdminProvider>
              <AppRoutes />
            </AdminProvider>
          </UserProvider>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App;
