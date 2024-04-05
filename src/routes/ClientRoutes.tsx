import { Routes, Route } from "react-router-dom";
import Home from "../Components/pages/Client/Home";
import Orders from "../Components/pages/Client/Order/Orders";
import Cart from "../Components/pages/Client/Cart/Cart";
import Checkout from "../Components/pages/Client/Checkout/Checkout";
import Configuration from "../Components/pages/Client/Configuration/Configuration";
import About from "../Components/pages/Sobre";
import Profile from "../Components/pages/Client/Profile/Profile";

export const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/config" element={<Configuration />} />
        </Routes>
    );
};