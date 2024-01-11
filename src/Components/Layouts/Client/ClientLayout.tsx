/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import MenuBar from '../../Utils/MenuBar'
import Footer from '../../Utils/Footer';
import { useUser } from '../../Utils/Context/UserContext';

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