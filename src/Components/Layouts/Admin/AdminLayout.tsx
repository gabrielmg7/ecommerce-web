/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import Footer from '../../Utils/Footer';
import { useUser } from '../../../Contexts/UserContext';
import MenuBar from '../../Utils/MenuBar/MenuBar';

type AdminLayoutProps = {
    children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {

    const userContext  = useUser();

    return (
        <div>
            <MenuBar />
            {children}
            <Footer />
        </div>
    );
};

export default AdminLayout;