import React from 'react';
import { Grid, Typography, Button, Divider } from '@mui/material';
import { useThemeContext } from '../../../../Themes/ThemeProviderWrapper';
import PlaceIcon from '@mui/icons-material/Place';

const AddressComponent: React.FC = () => {
    const colors = useThemeContext();

    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item container direction="column" justifyContent="space-evenly" alignItems="flex-start" xs={12} bgcolor="background.card" rowGap={1} paddingInline={1}>
                <Grid item container direction="row" justifyContent="flex-start" alignItems="center" gap={1} marginTop={1} >
                    <PlaceIcon color="action" fontSize="small" />
                    <Typography variant="subtitle1" color="text.primary">
                        Endereço Principal
                    </Typography>
                </Grid>
                <Grid item container direction="row" justifyContent="flex-start" alignItems="center" sx={{ borderLeft: `4px solid ${colors.theme.palette.primary.main}`, paddingLeft: '8px', paddingInline: 2, marginInline: 1 }}>

                    <Grid item>
                        <Typography variant="body2" color="text.secondary"> {/* Rua  */}
                            Rua
                        </Typography>
                        <Typography variant="body2" color="text.secondary"> {/* Número + Descrição */}
                            Número
                        </Typography>
                        <Typography variant="body2" color="text.secondary"> {/* CEP + Cidade */}
                            CEP
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction="row" justifyContent="flex-end" alignItems="center" marginBottom={1} gap={2}>
                    <Button variant="text" size="small" sx={{ color: colors.theme.palette.text.primary }}>
                        EDITAR
                    </Button>
                    <Button variant="text" size="small" sx={{ color: colors.theme.palette.text.primary }}>
                        SELECIONAR OUTRO
                    </Button>
                    <Button variant="text" size="small" sx={{ color: colors.theme.palette.primary.main }}>
                        NOVO ENDEREÇO
                    </Button>
                </Grid>

            </Grid>
        </Grid>
    );
};

export default AddressComponent;
