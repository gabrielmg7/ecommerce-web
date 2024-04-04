import { MarkunreadMailboxTwoTone } from "@mui/icons-material";
import { Grid, Typography, TextField } from "@mui/material";
import { useState } from "react";
import useFormatValidation from "../../../../hooks/useFormatValidation";


export const AdressData = () => {

    const { isValidEmail, isValidCEP, validateEmail, validateCEP } = useFormatValidation();

    

    const [formState, setFormState] = useState({
        endereco: {
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            complemento: '',
            cep: '',
        },
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
            endereco: {
                ...formState.endereco,
                [name]: value,
            },
        });
    };

    const consultarCEP = (cep: string) => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
                setFormState({
                    endereco: {
                        ...formState.endereco,
                        cidade: data.localidade,
                        bairro: data.bairro,
                        rua: data.logradouro,
                        // Você pode adicionar mais campos aqui se desejar
                    },
                });
            })
            .catch((error) => {
                console.error('Erro ao consultar CEP:', error);
                alert('CEP inválido ou não encontrado.');
            });
    };

    const gridStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '2px',
        boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)',
    };

    return (
        <Grid item container xs sm md lg xl direction={'column'} bgcolor={'background.paper'} sx={gridStyle}>
            {/* Título do formulário */}
            <Grid item container direction={"row"} alignItems={"center"} gap={1} marginBlock={2} paddingInline={2}>
                <MarkunreadMailboxTwoTone color="action" />
                <Typography color={'text.primary'} variant="h5">
                    Endereço
                </Typography>
            </Grid>
            {/* Campos do formulário */}
            <Grid item container
                direction={'row'}
                rowSpacing={2}
                columnSpacing={1}
                justifyContent={'center'}
                marginBottom={3}
            >
                <Grid item xs={11} sm={10} md={6} lg={4}>
                    <TextField
                        name="cidade"
                        label="Cidade"
                        type="city"
                        value={formState.endereco.cidade}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={11} sm={10} md={6} lg={7}>
                    <TextField
                        name="bairro"
                        label="Bairro"
                        type="text"
                        value={formState.endereco.bairro}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={11} sm={10} md={6} lg={9}>
                    <TextField
                        name="rua"
                        label="Rua"
                        type="text"
                        value={formState.endereco.rua}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={11} sm={10} md={6} lg={2}>
                    <TextField
                        name="numero"
                        label="Número"
                        type="number"
                        value={formState.endereco.numero}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={11} sm={10} md={6} lg={8}>
                    <TextField
                        name="complemento"
                        label="Complemento"
                        type="text"
                        value={formState.endereco.complemento}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={11} sm={10} md={6} lg={3}>
                    <TextField
                        name="cep"
                        label="CEP"
                        type="text"
                        value={formState.endereco.cep}
                        onChange={(e) => {
                            const inputElement = e.target;
                            handleInputChange(e);
                            consultarCEP(inputElement.value);
                        }}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};