import DesktopClients from "../components/Clients/DesktopClients";
import HomeShopContainer from "../components/ProductDetails/HomeShopContainer";
import DesktopProductDetailcards from "../components/ProductDetails/DesktopProductDetailcards";
import ProductDescription from "../components/ProductDetails/ProductDescription";
import ProductDetailCards from "../components/ProductDetails/ProductDetailCards";

export default function ProductDetailPage(){

    return (
        <div className="flex flex-col gap-0">
            <HomeShopContainer />

            <DesktopProductDetailcards />

            <ProductDescription />

            <ProductDetailCards />

            <DesktopClients />
        </div>
    );
}