import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import { IUsuario, initialUser } from "../../../../types/restAPI/IUsuario";
import ClientLayout from "../../../layouts/ClientLayout";
import { useUserContext } from "../../../../Contexts/UserContext";
import { AdressData } from "./AdressData";
import ChangePassword from "./ChangePassword";
import { PersonalData } from "./PersonalData";

const Profile = () => {
    const { data, setData } = useUserContext();
    const [formState, setFormState] = useState<IUsuario>(data ? data : initialUser);

    //TODO: inserir comunicação com o back end
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setData(formState);
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

