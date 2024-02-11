import React from "react";
import { Divider, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import paymentSVG from "../../../assets/svg/payment.svg";
import protectedSVG from "../../../assets/svg/protected.svg";
import shippingSVG from "../../../assets/svg/shipping.svg";


const BannerFooter: React.FC = () => {
  return (
    <Grid container justifyContent="space-around" alignItems="center" spacing={2} direction={"row"}>

      <Grid item container xs={12} sm={3} direction="column" alignContent={"center"} alignItems="center">

        <Grid item>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <img src={paymentSVG} alt="payment SVG" />
          </Link>
        </Grid>

        <Grid item>
          <Typography align="center" variant="h6">Escolha como pagar</Typography>
          <Typography align="center" variant="body1">
            Com o OnlineShopping, você paga com cartão, boleto ou Pix. Você também tem sua Carteira onde pode cadastrar cartões e gerenciar sua quantia.
          </Typography>
          <Typography align="center" variant="body2" color="primary">
            Ver Mais
          </Typography>
        </Grid>

      </Grid>

      <Divider orientation="vertical" flexItem />

      <Grid item container xs={12} sm={3} direction="column" alignContent={"center"} alignItems="center">

        <Grid item>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <img src={shippingSVG} alt="shipping SVG" />
          </Link>
        </Grid>

        <Grid item>
          <Typography align="center" variant="h6">
            Frete grátis a partir de R$ 79
          </Typography>
          <Typography align="center" variant="body1">
            Ao se cadastrar no OnlineShopping, você tem frete grátis em milhares de produtos.
          </Typography>
          <Typography align="center" variant="body2" color="primary">
            Calcule seu Frete
          </Typography>
        </Grid>

      </Grid>

      <Divider orientation="vertical" flexItem />

      <Grid item container xs={12} sm={3} direction="column" alignContent={"center"} alignItems="center">

        <Grid item>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <img src={protectedSVG} alt="protected SVG" />
          </Link>
        </Grid>

        <Grid item>
          <Typography align="center" variant="h6">Segurança, do início ao fim</Typography>
          <Typography align="center" variant="body1">
            Você não gostou do que comprou? Devolva! No OnlineShopping não há nada que você não possa fazer, porque você
            está sempre protegido.
          </Typography>
          <Typography align="center" variant="body2" color="primary">
            Como te protegemos
          </Typography>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default BannerFooter;