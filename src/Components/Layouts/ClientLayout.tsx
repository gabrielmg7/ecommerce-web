/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react'
import Footer from '../Utils/Footer';
import { useUser } from '../../Contexts/UserContext';
import MenuBar from '../Utils/MenuBar/MenuBar';
import { useThemeContext } from '../../Themes/ThemeProviderWrapper';

type ClientLayoutProps = {
    children: ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {

    const userContext = useUser();
    const { theme } = useThemeContext();

    return (
        <div>
            <MenuBar />
            {children}
            <Footer />
        </div>
    );
};

export default ClientLayout;