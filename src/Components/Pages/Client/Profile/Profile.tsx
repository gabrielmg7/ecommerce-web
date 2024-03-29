import React, { ChangeEvent, useState } from "react";
import { Grid, TextField, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { IUser, initialUser } from "../../../../Types/restAPI/IUser";
import ClientLayout from "../../../Layouts/ClientLayout";
import { DateOfBirthInput } from "./DateOfBirthInput";
import { useUserContext } from "../../../../Contexts/UserContext";


const Profile = () => {
    const { data, setData } = useUserContext();
    const [formState, setFormState] = useState<IUser>(data || initialUser);
    const [showPassword, setShowPassword] = React.useState(false);
    const [errors, setErrors] = useState({ email: '', name: '', sobrenome: '' });

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setData(formState);

        //TODO: inserir comunicação com o back end
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            senha: value // Atualize o estado apenas para o campo de senha
        }));
    };

    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            repetirSenha: value // Atualiza o estado apenas para o campo de repetição de senha
        }));
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const consultarCEP = async (cep: string) => {
        // Verifica se o CEP possui o formato correto
        const cepRegex = /^[0-9]{8}$/;
        if (!cepRegex.test(cep)) {
            console.log("Formato de CEP inválido.");
            return;
        }

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
                console.log("CEP não encontrado na base de dados.");
                return;
            }
            setFormState({
                ...formState,
                endereco: {
                    cidade: data.localidade,
                    bairro: data.bairro,
                    rua: data.logradouro,
                    complemento: data.complemento,
                    numero: 0,
                    cep: 0
                }
            });
        } catch (error) {
            console.error("Ocorreu um erro:", error);
        }
    };

    const PersonalData = () => {

        const gridStyle = {
            width: '100%',
            height: '100%',
            borderRadius: '2px',
            boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)'
        };

        return (
            <Grid item container
                xs sm md lg xl
                direction={"column"}
                bgcolor={"background.paper"}
                sx={gridStyle}
            >
                <Grid item marginBlock={2} paddingInline={1}> {/* Título do formulário */}
                    <Typography color={"text.primary"} variant="h5">
                        Dados Básicos
                    </Typography>
                </Grid>
                <Grid item> {/* Dados Pessoais */}
                    <Grid item container
                        direction={"row"}
                        rowSpacing={2}
                        columnSpacing={1}
                        justifyContent={"center"}
                    >
                        <Grid item xs={11} sm={10} md={6} lg={5}> {/*  Campo de nome */}
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
                        <Grid item xs={11} sm={10} md={6} lg={6}>{/*  Campo de sobrenome */}
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
                        <Grid item xs={11} sm={10} md={6} lg={4}>{/*  Campo de CPF */}
                            <TextField
                                name="cpf"
                                label="CPF"
                                type="text"
                                value={formState.cpf}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={11} sm={10} md={6} lg={3}>{/*  Campo de data de nascimento */}
                            <DateOfBirthInput
                                value={formState.dataNascimento}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={11} sm={10} md={6} lg={4}>{/*  Campo de telefone */}
                            <TextField
                                name="telefone"
                                label="Telefone"
                                type="tel"
                                value={formState.telefone}
                                onChange={handleInputChange}
                                fullWidth

                            />
                        </Grid>
                        <Grid item xs={11} sm={10} md={6} lg={11}> {/*  Campo de email */}
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
                    </Grid>
                </Grid>
                <Grid item marginTop={2} paddingInline={1} > {/*  Título do formulário*/}
                    <Typography color={"text.primary"} variant="h5">
                        Alterar Senha
                    </Typography>
                </Grid>
                <Grid item marginBlock={2} > {/*  Alterar a senha */}

                    <Grid item container
                        direction={"row"}
                        spacing={1}
                        justifyContent={"center"}
                    >
                        <Grid item xs={11} sm={10} md={6} lg={5.5}> {/*  Campo de nova senha */}
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Senha
                                </InputLabel>
                                <OutlinedInput
                                    name="password"
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formState.password}
                                    onChange={handlePasswordChange}
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
                        <Grid item xs={11} sm={10} md={6} lg={5.5}> {/*  Repetir nova senha */}
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Nova Senha
                                </InputLabel>
                                <OutlinedInput
                                    name="password"
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formState.password}
                                    onChange={handleRepeatPasswordChange}
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
        );
    };

    const AdressData = () => {
        const gridStyle = {
            width: '100%',
            height: '100%',
            borderRadius: '2px',
            boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)'
        };

        return (
            <Grid item container
                xs sm md lg xl
                direction={"column"}
                bgcolor={"background.paper"}
                sx={gridStyle}
            >
                {/* Título do formulário */}
                <Grid item marginBlock={2} paddingInline={1}>
                    <Typography color={"text.primary"} variant="h5">
                        Endereço
                    </Typography>
                </Grid>
                {/* Campos do formulário */}
                <Grid item container
                    direction={"row"}
                    rowSpacing={2}
                    columnSpacing={1}
                    justifyContent={"center"}
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
                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                                const inputElement = e.target as HTMLInputElement;
                                handleInputChange({
                                    target: {
                                        name: inputElement.name,
                                        value: inputElement.value,
                                        type: 'text',
                                        checked: false,
                                    }
                                } as React.ChangeEvent<HTMLInputElement>);
                                consultarCEP(inputElement.value);
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    const ButtonGroup = () => {
        return (
            <Grid item container
                xs sm md lg xl
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={2}
                mb={2}
            >
                <Button type="submit" color="primary">
                    Salvar
                </Button>
            </Grid>
        );
    };

    return (
        <ClientLayout>
            <form onSubmit={handleSubmit}>
                <Grid container
                    direction={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Grid item container // Título
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        marginBlock={3}
                        
                    >
                        <Typography color={"text.primary"} variant="h4">
                            Minha Conta
                        </Typography>
                    </Grid>
                    <Grid item container // Dados do Cliente
                        xs={12} sm={10} md={8} lg={6} xl={4}
                        justifyContent={"center"}
                        columnSpacing={2}
                    >
                        <Grid item // PersonalData
                            xs={10} sm={5} md={5.3} lg={5.5} xl={6}
                        >
                            <Grid item container
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <PersonalData />
                            </Grid>
                        </Grid>
                        <Grid item // AdressData
                            xs={10} sm={5} md={5.3} lg={5.5} xl={6}
                        >
                            <AdressData />
                        </Grid>
                    </Grid>
                    <ButtonGroup />
                </Grid>
            </form >
        </ClientLayout>
    );
};

export default Profile;

