import React from 'react'
import ClientLayout from '../../../Layouts/ClientLayout'
import { Grid, Typography } from '@mui/material';
import MarkunreadMailboxTwoToneIcon from '@mui/icons-material/MarkunreadMailboxTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';

const Cart = () => {
  return (
    <ClientLayout>
      <Grid container direction={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
        {/* ===================================== Coluna 1 ===================================== */}
        <Grid item container direction={"column"} sm={3} md={5} lg={6} xl={6} bgcolor={"background.paper"}>
          {/* ===================================== Endereço de Entrega ===================================== */}
          <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"} columnGap={1}>
            <MarkunreadMailboxTwoToneIcon color='action' />
            <Typography color={"text.primary"} variant="h5">Endereço de Entrega</Typography>
          </Grid>
          {/* ===================================== Produtos ===================================== */}
          <Grid>
            <Grid item direction={"column"} bgcolor={"background.paper"}>
              <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"} columnGap={1}>
                <LocalMallTwoToneIcon color='action' />
                <Typography color={"text.primary"} variant="h5">Produtos</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* ===================================== Resumo do Pedido ===================================== */}
        <Grid item direction={"column"} bgcolor={"background.paper"} sm={1} md={2} lg={4} xl={5}>
          <Grid container direction={"row"} alignItems={"center"} justifyContent={"flex-start"} columnGap={1}> 
            <FindInPageTwoToneIcon color='action'/>
            <Typography color={"text.primary"} variant="h5">Resumo</Typography>
          </Grid>
        </Grid>

      </Grid>
    </ClientLayout>
  );
};

export default Cart;

