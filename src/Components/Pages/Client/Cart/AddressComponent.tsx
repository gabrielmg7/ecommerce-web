import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const AddressComponent: React.FC = () => {
    return (
        <Grid container spacing={2} sx={{ background: '#FAFAFB', padding: '2rem' }}>
            <Grid item xs={12}>
                <Typography variant="h6" color={'text.default'}>
                    Selecione o Endereço
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ color: '#42464D', marginBottom: '1rem' }}>
                    Endereço Principal
                </Typography>
                <div >
                    <Typography variant="body1">
                        Rua Luiza Miranda Coelho
                    </Typography>
                    <Typography variant="body1">
                        Número: 21, Casa
                    </Typography>
                    <Typography variant="body1">CEP 60811110 - FORTALEZA, CE</Typography>
                </div>
                <Grid>
                    <Button variant="contained" sx={{ backgroundColor: '#FFFFFF', color: '#42464D', marginRight: '1rem' }}>
                        EDITAR
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: '#FFFFFF', color: '#42464D', marginRight: '1rem' }}>
                        SELECIONAR OUTRO
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: '#FF6500', color: '#FFFFFF' }}>
                        NOVO ENDEREÇO
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AddressComponent;
