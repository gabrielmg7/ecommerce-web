import { ReactNode } from 'react';
import Footer from '../Utils/Footer';
import MenuBar from '../Utils/MenuBar';
import { Grid } from '@mui/material';

type ClientLayoutProps = {
    children: ReactNode;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {

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

export default ClientLayout;
