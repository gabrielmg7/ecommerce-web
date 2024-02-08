import React from 'react';
import { Divider, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import paymentSVG  from '../../../assets/svg/payment.svg';

const BannerFooter: React.FC = () => {
  return (
    <Grid container justifyContent="space-around" alignItems="center" spacing={2}>

      <Grid item container alignItems="inherit">
        <Link component={RouterLink} to="/" color="inherit" underline="none">
        <img src={paymentSVG} alt="payment SVG" />
        </Link>
      </Grid>

      <Grid item container xs={12} sm={3} direction="column" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" align="center">Escolha como pagar</Typography>
        <Typography variant="body1" align="center">
          Com o OnlineShopping, você paga com cartão, boleto ou Pix. Você também tem sua Carteira onde pode cadastrar cartões e gerenciar sua quantia.
        </Typography>
        <Typography variant="body2" color="primary" align="center">
          Ver Mais
        </Typography>
      </Grid>

      <Divider orientation="vertical" flexItem />

      <Grid item container xs={12} sm={3} direction="column" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" align="center">Frete grátis a partir de R$ 79</Typography>
        <Typography variant="body1" align="center">
          Ao se cadastrar no OnlineShopping, você tem frete grátis em milhares de produtos.
        </Typography>
      </Grid>

      <Divider orientation="vertical" flexItem />

      <Grid item container xs={12} sm={3} direction="column" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" align="center">Segurança, do início ao fim</Typography>
        <Typography variant="body1" align="center">
          Você não gostou do que comprou? Devolva! No OnlineShopping não há nada que você não possa fazer, porque você
          está sempre protegido.
        </Typography>
        <Typography variant="body2" color="primary" align="center">
          Como te protegemos
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BannerFooter;