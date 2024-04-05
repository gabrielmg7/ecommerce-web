import React from 'react'
import ClientLayout from '../../../layouts/ClientLayout'
import { Grid, Typography } from '@mui/material';
import MarkunreadMailboxTwoToneIcon from '@mui/icons-material/MarkunreadMailboxTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import AddressComponent from './AddressComponent';

const Cart = () => {
  return (
    <ClientLayout>
      <Grid container direction={'row'} justifyContent={'space-evenly'} alignItems={'flex-start'}>
        {/* Coluna 1 ===================================== */}
        <Grid container direction={'column'} justifyContent='space-evenly' alignItems='center' gap={2} xs={12} sm={11} md={7} lg={7.4} xl={6.4}>
          {/* Endereço de Entrega ===================================== */}
          <Grid item container bgcolor={'background.paper'} padding={2}>
            {/* Título da Seção ===================================== */}
            <Grid item container
              direction={'row'}
              alignItems={'center'}
              justifyContent={'flex-start'}
              marginBottom={2}
              gap={1}
            >
              <MarkunreadMailboxTwoToneIcon color='action' />
              <Typography color={'text.primary'} variant='h5'>
                Endereço de Entrega
              </Typography>
            </Grid>
            {/* Conteúdo da Seção ===================================== */}
            <Grid container direction={'column'}>
              <AddressComponent/>


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
        <Grid item container direction={'column'} bgcolor={'background.paper'} xs={12} sm={11} md={4} lg={4} xl={5}>
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

