// Este é um componente de layout que envolve as rotas e inclui o 'MenuBar' e o 'Footer'. 
// Assim, apenas as rotas (páginas) dentro desse layout serão atualizadas, mantendo o 'MenuBar' e o 'Footer' constantes.

import { ReactNode } from "react";
import Footer from "../Footer";
import MenuBar from "../MenuBar";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <MenuBar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
