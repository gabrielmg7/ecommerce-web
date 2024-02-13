import React from "react";
import { Divider, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import paymentSVG from "../../assets/svg/payment.svg";
import protectedSVG from "../../assets/svg/protected.svg";
import shippingSVG from "../../assets/svg/shipping.svg";


const ShoppingInfoBanner: React.FC = () => {

  return (

    <Grid container justifyContent="space-around" alignItems="center" direction={"row"} spacing={1} mt={4}>
      
      <Grid item container xs={12} sm={3} spacing={1} direction="column" alignContent={"center"} alignItems="center" alignSelf={"start"}>

        <Grid item>
          <Link component={RouterLink} to="/" color="text.primary" underline="none">
            <img src={paymentSVG} alt="payment SVG" />
          </Link>
        </Grid>

        <Grid item>
          <Typography align="center" variant="h6" color="text.primary">
            Escolha como pagar
            </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            Com o OnlineStore, você paga com cartão, boleto ou Pix. Você também tem sua Carteira onde pode cadastrar cartões e gerenciar sua quantia.
          </Typography>
          <Typography align="center" variant="body2" color="primary" mt={2}>
            Ver Mais
          </Typography>
        </Grid>
        
      </Grid>

      <Divider orientation="vertical" flexItem />

      <Grid item container xs={12} sm={3} spacing={1} direction="column" alignContent={"center"} alignItems="center" alignSelf={"start"}>

        <Grid item>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <img src={shippingSVG} alt="shipping SVG" />
          </Link>
        </Grid>

        <Grid item>
          <Typography align="center" variant="h6" color="text.primary">
            Frete grátis a partir de R$ 79
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            Ao se cadastrar no OnlineStore, você tem frete grátis em milhares de produtos, baseado na sua localização.
          </Typography>
          <Typography align="center" variant="body2" color="primary" mt={2}>
            Calcule seu Frete
          </Typography>
        </Grid>

      </Grid>

      <Divider orientation="vertical" flexItem />

      <Grid item container xs={12} sm={3} spacing={1} direction="column" alignContent={"center"} alignItems="center" alignSelf={"start"}>

        <Grid item>
          <Link component={RouterLink} to="/" color="text.primary" underline="none">
            <img src={protectedSVG} alt="protected SVG" />
          </Link>
        </Grid>

        <Grid item>
          <Typography align="center" variant="h6" color="text.primary">
            Segurança, do início ao fim
            </Typography>
          <Typography align="center" variant="body2" color="text.primary">
            Você não gostou do que comprou? Devolva! No OnlineStore não há nada que você não possa fazer, porque você está sempre protegido.
          </Typography>
          <Typography align="center" variant="body2" color="primary" mt={2}>
            Como te protegemos
          </Typography>
        </Grid>

      </Grid>

    </Grid>
  );
};

export default ShoppingInfoBanner;