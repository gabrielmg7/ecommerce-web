import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IUser, initialUser } from '../../../Types/restAPI/IUser';
import clienteApiService from '../../../Services/restAPI/userApiService';

const defaultTheme = createTheme();

export default function CadastrarCliente() {
    const [cliente, setCliente] = useState<IUser>(initialUser);


    const createUserData = async (data: IUser) => {

        console.info('📞 createUserData()')

        try {
            await clienteApiService.createUser(data);
            console.info('✔ createUserData() - Usuário Cadastrado!')
        } catch (error) {
            console.error('❌ createUserData() - Erro ao cadastrar cliente:', error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.info('📞 handleInputChange()')

        const { name, value, type, checked } = event.target;
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        console.info('📞 handleSubmit()')

        event.preventDefault();
        try {
            await createUserData(cliente);
            console.info('✔ handleSubmit() - Usuário cadastrado com sucesso!');
        } catch (error) {
            console.error('❌ handleSubmit() - Erro ao cadastrar usuário:', error);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Cadastre-se
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="nome"
                                    name="nome"
                                    required
                                    fullWidth
                                    id="nome"
                                    label="Primeiro Nome"
                                    autoFocus
                                    value={cliente.nome}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    fullWidth
                                    id="sobrenome"
                                    label="Sobrenome"
                                    name="sobrenome"
                                    value={cliente.sobrenome}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cpf"
                                    label="CPF"
                                    name="cpf"
                                    autoComplete="cpf"
                                    value={cliente.cpf}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    value={cliente.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Senha"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={cliente.password}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox name="allowExtraEmails" color="primary" checked={cliente.allowExtraEmails} onChange={handleInputChange} />}
                                    label="Desejo receber ofertas, promoções de marketing e atualizações por e-mail."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            href='/unauthenticated/logar-cliente'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Cadastrar
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/unauthenticated/logar-cliente" variant="body2">
                                    Já possui uma conta? Faça login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
