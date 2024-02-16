import React, { useContext, useState } from "react";
import { Grid, TextField, Button, ToggleButton, Typography, ButtonGroup, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useUserContext } from "../../../Contexts/UserContext";
import { IUser, initialUser } from "../../../Types/restAPI/IUser";
import ClientLayout from "../../Layouts/ClientLayout";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const Profile = () => {
    const { userData, setUserData } = useUserContext();
    const [formState, setFormState] = useState<IUser>(userData || initialUser);
    const [showPassword, setShowPassword] = React.useState(false);
    const [errors, setErrors] = useState({ email: '', name: '', sobrenome: '' });

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        if (name === 'email' && !validateEmail(value)) {
            setErrors({ ...errors, email: 'Email inválido.' });
        } else if (name === 'name' && value.trim() === '') {
            setErrors({ ...errors, name: 'Nome é obrigatório.' });
        } else if (name === 'sobrenome' && value.trim() === '') {
            setErrors({ ...errors, sobrenome: 'Sobrenome é obrigatório.' });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setUserData(formState);
    };


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <ClientLayout>
            <form onSubmit={handleSubmit}>

                <Grid container justifyContent="space-around" alignItems="center" sx={{ mt: 2, mb: 2 }}>
                    <Grid item container margin={1}>
                        <Typography color={"text.primary"} variant="h4">
                            Meu Perfil
                        </Typography>
                    </Grid>

                    <Grid item container spacing={2} bgcolor={"background.paper"} boxShadow={3}>
                        <Grid item container>
                            <Typography color={"text.primary"} variant="h5">
                                Dados Básicos
                            </Typography>


                            <Grid item container direction="row" justifyContent="start" alignItems="center">
                                <Grid item>
                                    <TextField
                                        name="name"
                                        label="Nome"
                                        type="text"
                                        value={formState.nome}
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="sobrenome"
                                        label="Sobrenome"
                                        type="text"
                                        value={formState.sobrenome}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="cpf"
                                        label="CPF"
                                        type="text"
                                        value={formState.cpf}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="telefone"
                                        label="Telefone"
                                        type="tel"
                                        value={formState.telefone}
                                        onChange={handleInputChange}
                                        fullWidth

                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={formState.email}
                                        onChange={handleInputChange}
                                        fullWidth
                                        required
                                        error={Boolean(errors.email)}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item>
                                    <FormControl sx={{ width: '25ch' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                        <OutlinedInput
                                            name="password"
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            value={formState.password}
                                            onChange={handleInputChange}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Senha"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container direction={'column'}>
                            <Typography color={"text.primary"} variant="h5">
                                Endereço
                            </Typography>

                            <Grid item container direction="row" justifyContent="start" alignItems="center">
                                <Grid item>
                                    <TextField
                                        name="cidade"
                                        label="Cidade"
                                        type="city"
                                        value={formState.cidade}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="endereco"
                                        label="Endereço"
                                        type="address"
                                        value={formState.endereco}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name="cep"
                                        label="CEP"
                                        type="zip"
                                        value={formState.cep}
                                        onChange={handleInputChange}
                                        fullWidth

                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item container>
                        <ButtonGroup>
                            <Button type="submit" color="primary">
                                Salvar
                            </Button>
                            <Button type="reset" color="error">
                                Cancelar
                            </Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </form >
        </ClientLayout >
    );
};

export default Profile;