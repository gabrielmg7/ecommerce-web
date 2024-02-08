import { ReactNode } from 'react'
import Footer from '../Utils/Footer/Footer';
import MenuBar from '../Utils/MenuBar/MenuBar';
import BannerFooter from '../Utils/Footer/BannerFooter';

type ClientLayoutProps = {
    children: ReactNode; //Isso significa que você pode passar qualquer elemento React como filho para o componente ClientLayout.
};

const ClientLayout = ({ children }: ClientLayoutProps) => {

    return (
        <>
            <MenuBar />
            {children}
            <BannerFooter/>
            <Footer />
        </>
    );
};

export default ClientLayout;