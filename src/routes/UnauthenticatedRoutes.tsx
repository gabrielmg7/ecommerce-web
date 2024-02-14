import { Routes, Route } from "react-router-dom"
import Home from "../Components/Pages/Client/Home";
import SignIn from "../Components/Pages/Client/SignIn";
import Login from "../Components/Pages/Client/Login";
import Sobre from "../Components/Pages/Sobre";

export const UnauthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sobre" element={<Sobre />} />

      </Routes>
    );
  };