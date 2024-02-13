import ClientLayout from "../../Layouts/ClientLayout"
import BannerFooter from "../../Utils/Footer/ShoppingInfoBanner";
import ProductList from "../../Utils/ProductList";

export default function Home() {
    return (
        <ClientLayout>
            <ProductList />
            <BannerFooter/>
        </ClientLayout>
    );
}