import { ReactNode } from 'react'
import Footer from '../utils/Footer';
import MenuBar from '../utils/MenuBar/MenuBar';
import { Grid } from '@mui/material';

type AdminLayoutProps = {
    children: ReactNode; //Isso significa que você pode passar qualquer elemento React como filho para o componente ClientLayout.
};

const AdminLayout = ({ children }: AdminLayoutProps) => {

    return (
        <Grid container direction="column" style={{ minHeight: '100vh' }}>
            <Grid item>
                <MenuBar />
            </Grid>
            <Grid item xs>
                {children}
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default AdminLayout;