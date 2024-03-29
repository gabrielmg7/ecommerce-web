import React from 'react'
import ClientLayout from '../../../Layouts/ClientLayout'
import { Grid, Typography } from '@mui/material';
import MarkunreadMailboxTwoToneIcon from '@mui/icons-material/MarkunreadMailboxTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import AddressComponent from './AddressComponent';

const Cart = () => {
  return (
    <ClientLayout>
      <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'flex-start'}>
        <Grid item container // Título
          direction={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          marginBlock={3}
        >
          <Typography color={'text.primary'} variant='h4'>
            Carrinho
          </Typography>
        </Grid>
        {/* Coluna 1 ===================================== */}
        <Grid container direction={'column'} justifyContent='space-evenly' gap={2} alignItems='center' sm={3} md={5} lg={7} xl={6}>
          {/* Endereço de Entrega ===================================== */}
          <Grid item container bgcolor={'background.paper'}>
            {/* Título da Seção ===================================== */}
            <Grid item container
              direction={'row'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              columnGap={1}
            >
              <MarkunreadMailboxTwoToneIcon color='action' />
              <Typography color={'text.primary'} variant='h5'>
                Endereço de Entrega
              </Typography>
            </Grid>
            {/* Conteúdo da Seção ===================================== */}
            <Grid container direction={'column'} margin={1} padding={1}>
              <AddressComponent/>
              <Typography variant={'h6'} color={"text.secondary"}>
                Endereço Principal
              </Typography>
              <Typography>
                Rua
              </Typography>
              <Typography>
                Nº
              </Typography>
              <Typography>
                Bairro
              </Typography>
              <Typography>
                Cidade
              </Typography>
              <Typography>
                CEP
              </Typography>

            </Grid>
          </Grid>
          {/* Produtos ===================================== */}
          <Grid item container bgcolor={'background.paper'}>
            {/* Título da Seção ===================================== */}
            <Grid item container
              direction={'row'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              columnGap={1}
            >
              <LocalMallTwoToneIcon color='action' />
              <Typography color={'text.primary'} variant='h5'>
                Produtos
              </Typography>
            </Grid>
            {/* Conteúdo da Seção ===================================== */}
            <Grid>

            </Grid>
          </Grid>
        </Grid>

        {/* Resumo do Pedido ===================================== */}
        <Grid item direction={'column'} bgcolor={'background.paper'} sm={1} md={2} lg={4} xl={5}>
          <Grid container direction={'row'} alignItems={'center'} justifyContent={'flex-start'} columnGap={1}>
            <FindInPageTwoToneIcon color='action' />
            <Typography color={'text.primary'} variant='h5'>
              Resumo
            </Typography>
          </Grid>
        </Grid>

      </Grid>
    </ClientLayout>
  );
};

export default Cart;

