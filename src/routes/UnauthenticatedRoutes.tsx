import { Routes, Route } from "react-router-dom"
import Home from "../Components/pages/Client/Home";
import SignIn from "../Components/pages/Client/SignIn";
import Login from "../Components/pages/Client/Login";
import Sobre from "../Components/pages/Sobre";

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