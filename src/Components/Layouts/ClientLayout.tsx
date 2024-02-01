import { ReactNode } from 'react'
import Footer from '../Utils/Footer';
import MenuBar from '../Utils/MenuBar/MenuBar';

type ClientLayoutProps = {
    children: ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {

    return (
        <>
            <MenuBar />
            {children}
            <Footer />
        </>
    );
};

export default ClientLayout;