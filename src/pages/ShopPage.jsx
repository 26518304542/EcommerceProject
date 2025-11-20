import React from "react";
import ShopPageContainer from "../components/Shop/ShopPageContainer";
import ShopCards from "../components/Shop/ShopCards";
import FilterRow from "../components/Shop/FilterRow";
import DesktopProductCards from "../components/Shop/DesktopProductCards";
import DesktopClients from "../components/Clients/DesktopClients";

export default function ShopPage() {

  const images = [
    { image: "/images/bestsellers/fixed-height.png", title: "Beige Trench Coat", price: "89", rating: 4.6 },
    { image: "/images/bestsellers/fixed-height (1).png", title: "Casual Knit Sweater", price: "49", rating: 4.8 },
    { image: "/images/bestsellers/fixed-height (2).png", title: "Floral Dress", price: "69", rating: 4.5 },
    { image: "/images/bestsellers/fixed-height (3).png", title: "Chic Jumpsuit", price: "74", rating: 4.7 },
    { image: "/images/bestsellers/fixed-height (4).png", title: "Light Top", price: "29", rating: 4.2 },
    { image: "/images/bestsellers/fixed-height (5).png", title: "Pleated Skirt", price: "39", rating: 4.4 },
    { image: "/images/bestsellers/fixed-height (6).png", title: "Pleated Skirt", price: "39", rating: 4.4 },
    { image: "/images/bestsellers/product-cover-5.png", title: "Pleated Skirt", price: "39", rating: 4.4 },
    // add more as needed...
  ];

  return (
    <div className="flex flex-col gap-0">
        <ShopPageContainer />

        <ShopCards images={images}/>

        <FilterRow />

        <DesktopProductCards />

        <DesktopClients />
    </div>
  );
}
