import { useState } from 'react';
import { Modal, Backdrop, Fade, Grid, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Stack, Button } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { IUser, initialUser } from '../../../../types/restAPI/IUsuario';
import { useUserContext } from '../../../../Contexts/UserContext';

const ChangePassword = () => {
    const { data, setData } = useUserContext();
    const [formState, setFormState] = useState<IUser>(data ? data : initialUser);
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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

    return (
        <div>
            <Button type="button" onClick={handleOpen} variant='outlined'>
                ALTERAR SENHA
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"}>
                        <Grid bgcolor={'background.card'} padding={'20px'} borderRadius={'5px'} boxShadow={'0 0 10px rgba(0, 0, 0, 0.5)'}>

                            <Typography color={"text.primary"} variant="h5">
                                Alterar Senha
                            </Typography>

                            <Grid item marginBlock={2}> {/*  Alterar a senha */}
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
                                                endAdornment={<InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>}
                                                label="Senha" />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={11} sm={10} md={6} lg={5.5}> {/*  Repetir nova senha */}
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-new-password">
                                                Nova Senha
                                            </InputLabel>
                                            <OutlinedInput
                                                name="password"
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={formState.password}
                                                onChange={handleRepeatPasswordChange}
                                                fullWidth
                                                endAdornment={<InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>}
                                                label="Senha" />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
            </Modal>
        </div>
    );
};

export default ChangePassword;
