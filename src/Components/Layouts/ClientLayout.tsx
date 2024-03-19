import { ReactNode } from 'react'
import Footer from '../Utils/Footer';
import MenuBar from '../Utils/MenuBar';
import { Grid } from '@mui/material';

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