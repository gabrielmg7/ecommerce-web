import { ReactNode } from 'react'
import Footer from '../Utils/Footer';
import MenuBar from '../Utils/MenuBar/MenuBar';

type AdminLayoutProps = {
    children: ReactNode; //Isso significa que você pode passar qualquer elemento React como filho para o componente ClientLayout.
};

const AdminLayout = ({ children }: AdminLayoutProps) => {

    return (
        <>
            <MenuBar />
            {children}
            <Footer />
        </>
    );
};

export default AdminLayout;