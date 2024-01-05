import { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import MenuBar from '../../components/MenuBar';

type FormData = {
    nome: string;
    email: string;
    telefone: string;
};

const initialFormData: FormData = {
    nome: '',
    email: '',
    telefone: '',
};

const CadastrarCliente = () => {
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário para o backend
        console.log('Dados do cliente:', formData);
        // Resetar o formulário após o envio (opcional)
        setFormData(initialFormData);
    };

    return (

        <Container>
            <MenuBar/>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Cadastro de Cliente
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Nome"
                                name="name"
                                value={formData.nome}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="E-mail"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleInputChange}
                                required
                            />
                        </Grid>
                        {/* Adicione mais campos conforme necessário */}
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default CadastrarCliente;
