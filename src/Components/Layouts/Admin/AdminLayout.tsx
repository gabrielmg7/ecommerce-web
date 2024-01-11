import { ReactNode } from 'react'
import MenuBar from '../../Utils/MenuBar'
import Footer from '../../Utils/Footer';

type AdminLayoutProps = {
    children: ReactNode;
};

export const AdminLayout = ({ children }: AdminLayoutProps) => {
    return (
        <div>
            <MenuBar />
            {children}
            <Footer />
        </div>
    )
}