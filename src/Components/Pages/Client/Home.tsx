import ClientLayout from "../../layouts/ClientLayout"
import BannerFooter from "../../utils/ShoppingInfoBanner";
import ProductList from "../../utils/ProductList";

export default function Home() {
    return (
        <ClientLayout>
            <ProductList />
            <BannerFooter/>
        </ClientLayout>
    );
}