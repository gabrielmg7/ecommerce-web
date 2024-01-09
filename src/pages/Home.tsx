import { Grid } from "@mui/material";
import Banner from "../components/Banner";
import { Layout } from "../components/Layout"
import ProductCard from "../components/ProductCard";

export const Home = () => {
    return (
        <Layout>
            <Grid sx={{mt:3, mb: 3}}>
            <ProductCard nome={""} descricao={""} valor={0} imageUrl={""} />
            <Banner />
            </Grid>
            
        </Layout>
    );
}