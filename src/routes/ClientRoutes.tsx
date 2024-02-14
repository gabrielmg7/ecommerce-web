import { Routes, Route } from "react-router-dom";
import Sobre from "../Components/Pages/Sobre";
import Home from "../Components/Pages/Client/Home";
import Orders from "../Components/Pages/Client/Order/Orders";
import Cart from "../Components/Pages/Client/Cart/Cart";
import Checkout from "../Components/Pages/Client/Checkout";

export const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pedidos" element={<Orders />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/checkout" element={<Checkout />} />

        </Routes>
    );
};
