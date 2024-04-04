import { Grid, Typography, TextField } from "@mui/material";
import ChangePassword from "./ChangePassword";
import { DateOfBirthInput } from "./DateOfBirthInput";
import { useState } from "react";
import { IUsuario, initialUser } from "../../../../types/restAPI/IUsuario";
import { useUserContext } from "../../../../Contexts/UserContext";
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';


export const PersonalData = () => {
    const { data, setData } = useUserContext();
    const [formState, setFormState] = useState<IUsuario>(data ? data : initialUser);
    const [errors, setErrors] = useState({ email: '', name: '', sobrenome: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


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