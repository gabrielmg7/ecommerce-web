/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import MenuBar from '../../Utils/MenuBar'
import Footer from '../../Utils/Footer';
import { useUser } from '../../../Contexts/UserContext';

type AdminLayoutProps = {
    children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {

    const { user } = useUser();

    return (
        <div>
            <MenuBar />
            {children}
            <Footer />
        </div>
    );
};

export default AdminLayout;