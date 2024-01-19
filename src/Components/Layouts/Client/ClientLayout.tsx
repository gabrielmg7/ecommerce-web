/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import MenuBar from '../../Utils/MenuBar/MenuBar'
import Footer from '../../Utils/Footer';
import { useUser } from '../../../Contexts/UserContext';

type ClientLayoutProps = {
    children: ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {

    const { user } = useUser();

    return (
        <div>
            <MenuBar />
            {children}
            <Footer />
        </div>
    );
};

export default ClientLayout;