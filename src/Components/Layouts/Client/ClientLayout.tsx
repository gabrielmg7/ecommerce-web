import { ReactNode } from 'react'
import MenuBar from '../../Utils/MenuBar'
import Footer from '../../Utils/Footer';

type ClientLayoutProps = {
    children: ReactNode;
};

export const ClientLayout = ({ children }: ClientLayoutProps) => {
    return (
        <div>
            <MenuBar />
            {children}
            <Footer />
        </div>
    )
}
