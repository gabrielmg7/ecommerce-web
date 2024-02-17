import React, { ChangeEvent, useState } from "react";
import { Grid, TextField, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useUserContext } from "../../../Contexts/UserContext";
import { IUser, initialUser } from "../../../Types/restAPI/IUser";
import ClientLayout from "../../Layouts/ClientLayout";
import { VisibilityOff, Visibility, } from "@mui/icons-material";
import { DateOfBirthInput } from "../../Utils/DateOfBirthInput";

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
                {/* Container principal ==========================================*/}
                <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"}>
                    {/* Container do título da página ==========================================*/}
                    <Grid item container xs sm md lg xl
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={1}
                        mt={2}
                        mb={1}
                    >
                        <Typography color={"text.primary"} variant="h4">
                            Minha Conta
                        </Typography>
                    </Grid>
                    {/* Container do formulário ==========================================*/}
                    <Grid item container xs sm md lg xl
                        gap={1}
                        spacing={1}
                        direction={"row"}
                        justifyContent={"space-evenly"}
                        alignItems={"flex-start"}
                        width={"100%"}
                        height={"100%"}
                    >
                        {/* Container dos Dados Pessoais ==========================================*/}
                        <Grid item container xs sm md lg xl
                            direction={"column"}
                            boxSizing={"content-box"}
                            bgcolor={"background.paper"}
                            borderRadius={2}
                            boxShadow={3}
                            width={"100%"}
                            height={"100%"}

                        >
                            {/* Container do título do formulário ==========================================*/}
                            <Grid item container>
                                <Typography color={"text.primary"} variant="h5">
                                    Dados Básicos
                                </Typography>
                            </Grid>
                            {/* Container dos campos do formulário ==========================================*/}
                            <Grid item container direction={"row"} justifyContent={"flex-start"} alignItems="center" spacing={1}>
                                <Grid item xs={11} sm={10} md={6} lg={5}> {/*  Container do campo de nome */}
                                    <TextField
                                        name="name"
                                        label="Nome"
                                        type="text"
                                        value={formState.nome}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.name)}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={6}>{/*  Container do campo de sobrenome */}
                                    <TextField
                                        name="sobrenome"
                                        label="Sobrenome"
                                        type="text"
                                        value={formState.sobrenome}
                                        onChange={handleInputChange}
                                        error={Boolean(errors.sobrenome)}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={4} lg={4}>{/*  Container do campo de CPF */}
                                    <TextField
                                        name="cpf"
                                        label="CPF"
                                        type="text"
                                        value={formState.cpf}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={5}>{/*  Container do campo de data de nascimento */}
                                    <DateOfBirthInput
                                        value={formState.dataNascimento}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={4}>{/*  Container do campo de telefone */}
                                    <TextField
                                        name="telefone"
                                        label="Telefone"
                                        type="tel"
                                        value={formState.telefone}
                                        onChange={handleInputChange}
                                        fullWidth

                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={7}> {/*  Container do campo de email */}
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
                                <Grid item container direction={"column"}> {/*  Container do campo de senha */}
                                    <Grid item container>
                                        <Typography color={"text.primary"} variant="h6">
                                            Alterar Senha
                                        </Typography>
                                    </Grid>
                                    <Grid item container direction={"row"} spacing={1}>
                                        <Grid item xs={11} sm={10} md={6} lg={5}>
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">
                                                    Senha
                                                </InputLabel>
                                                <OutlinedInput
                                                    name="password"
                                                    id="outlined-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={formState.password}
                                                    onChange={handleInputChange}
                                                    fullWidth
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
                                        <Grid item xs={11} sm={10} md={6} lg={5}>
                                            <FormControl fullWidth variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">
                                                    Nova Senha
                                                </InputLabel>
                                                <OutlinedInput
                                                    name="password"
                                                    id="outlined-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    value={formState.password}
                                                    onChange={handleInputChange}
                                                    fullWidth
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
                            </Grid>
                        </Grid>
                        {/*  Container dos Dados de Endereço ==========================================*/}
                        <Grid item container xs sm md lg xl
                            direction={"column"}
                            boxSizing={"content-box"}
                            bgcolor={"background.paper"}
                            borderRadius={2}
                            boxShadow={3}
                            width={"100%"}
                            height={"100%"}

                        >
                            {/*  Container do título do formulário ==========================================*/}
                            <Grid item margin={1}>
                                <Typography color={"text.primary"} variant="h5">
                                    Endereço
                                </Typography>
                            </Grid>
                            {/*  Container dos campos do formulário ==========================================*/}
                            <Grid item container direction={"row"} justifyContent={"flex-start"} alignItems="center" spacing={1}>
                                <Grid item xs={11} sm={10} md={6} lg={4}> {/*  Container do campo de cidade */}
                                    <TextField
                                        name="cidade"
                                        label="Cidade"
                                        type="city"
                                        value={formState.endereco.cidade}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={7}> {  /*  Container do campo de bairro */}
                                    <TextField
                                        name="bairro"
                                        label="Bairro"
                                        type="text"
                                        value={formState.endereco.bairro}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={9}> {/*  Container do campo de rua */}
                                    <TextField name="rua"
                                        label="Rua"
                                        type="text"
                                        value={formState.endereco.rua}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={2}> {/*  Container do campo de número */}
                                    <TextField
                                        name="numero"
                                        label="Número"
                                        type="number"
                                        value={formState.endereco.numero}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={8}> {/*  Container do campo de complemento */}
                                    <TextField
                                        name="complemento"
                                        label="Complemento"
                                        type="text"
                                        value={formState.endereco.complemento}
                                        onChange={handleInputChange}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={11} sm={10} md={6} lg={3}> {/*  Container do campo de CEP */}
                                    <TextField
                                        name="cep"
                                        label="CEP"
                                        type="zip"
                                        value={formState.endereco.cep}
                                        onChange={handleInputChange}
                                        fullWidth

                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*  Container dos botões ==========================================*/}
                    <Grid item container xs sm md lg xl
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        spacing={2}
                        mt={2}
                        mb={2}
                    >
                        <Button type="submit" color="primary">
                            Salvar
                        </Button>
                    </Grid>
                </Grid>
            </form >
        </ClientLayout >
    );
};

export default Profile;