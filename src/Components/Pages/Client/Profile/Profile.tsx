import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { IUsuario, initialUser } from "../../../../types/restAPI/IUsuario";
import ClientLayout from "../../../Layouts/ClientLayout";
import { DateOfBirthInput } from "./DateOfBirthInput";
import { useUserContext } from "../../../../Contexts/UserContext";
import useFormatValidation from "../../../../Hooks/useFormatValidation";
import ChangePassword from "./ChangePassword";
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import { MarkunreadMailboxTwoTone } from "@mui/icons-material";

const Profile = () => {
    const { data, setData } = useUserContext();
    const [formState, setFormState] = useState<IUsuario>(data ? data : initialUser);
    const [showPassword, setShowPassword] = React.useState(false);
    const [errors, setErrors] = useState({ email: '', name: '', sobrenome: '' });
    const { isValidEmail, isValidCEP, validateEmail, validateCEP } = useFormatValidation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    //TODO: inserir comunicação com o back end
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setData(formState);
    };

    const PersonalData = () => {

        const handleButtonClick = () => {
            ChangePassword();
        };

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
                <Grid item container direction={"row"} gap={1} alignItems={"center"} marginBlock={2} paddingInline={2}> {/* Título do formulário */}
                    <AssignmentTwoToneIcon color="action" />
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
                        marginBottom={3}
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
            </Grid>
        );
    };

    const AdressData = () => {
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

    const ButtonGroup = () => {
        return (
            <Grid item container
                xs sm md lg xl
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                mt={2}
                mb={2}
            >
                <ChangePassword />
                <Button type="submit" color="primary" variant="contained">
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

