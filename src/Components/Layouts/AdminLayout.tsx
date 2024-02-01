import { ReactNode } from 'react'
import Footer from '../Utils/Footer';
import MenuBar from '../Utils/MenuBar/MenuBar';

type AdminLayoutProps = {
    children: ReactNode;
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