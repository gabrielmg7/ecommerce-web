import { Grid, Typography, TextField, Checkbox, Button } from "@mui/material";
import ChangePassword from "./ChangePassword";
import { useState } from "react";
import { IUsuario, initialUser } from "../../../../types/restAPI/IUsuario";
import { useUserContext } from "../../../../Contexts/UserContext";
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import { DateOfBirthInput } from "./DateOfBirthInput";


export const PersonalData = () => {
    const { data, setData } = useUserContext();
    const [formState, setFormState] = useState<IUsuario>(data ? data : initialUser);
    const [allowExtraEmails, setAllowExtraEmails] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setAllowExtraEmails(checked);
        setData(prevData => ({
            ...prevData,
            allowExtraEmails: checked
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
                    <Grid item xs={11} sm={10} md={6} lg={5}> {/* Textfield Nome */}
                        <TextField
                            name="name"
                            label="Nome"
                            type="text"
                            value={formState.nome}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={11} sm={10} md={6} lg={6}> {/* Textfield Sobrenome */}
                        <TextField
                            name="sobrenome"
                            label="Sobrenome"
                            type="text"
                            value={formState.sobrenome}
                            onChange={handleInputChange}
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={11} sm={10} md={6} lg={4}> {/* Textfield CPF */}
                        <TextField
                            name="cpf"
                            label="CPF"
                            type="text"
                            value={formState.cpf}
                            onChange={handleInputChange}
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={11} sm={10} md={6} lg={3}> {/* Textfield Data de Nascimento */}
                        <DateOfBirthInput
                            value={formState.dataNascimento}
                            onChange={handleInputChange}

                        />
                    </Grid>
                    <Grid item xs={11} sm={10} md={6} lg={4}> {/* Textfield Telefone */}
                        <TextField
                            name="telefone"
                            label="Telefone"
                            type="tel"
                            value={formState.telefone}
                            onChange={handleInputChange}
                            fullWidth
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={11} sm={10} md={6} lg={11}>{/* Textfield E-mail */}
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            fullWidth
                            required
                            size="small"
                        />
                        <Grid item container direction={"row"} alignItems={"center"} mt={1}>
                            <Checkbox
                                checked={allowExtraEmails}
                                onChange={handleCheckboxChange}
                            />
                            <Typography variant="body2" color={"text.primary"}>
                                Deseja receber e-mails de promoções, descontos e novas coleções?
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>

    );
};

