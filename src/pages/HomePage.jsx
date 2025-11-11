import ProductCard from "../components/ProductCard";
import CustomSlider from "../components/Slider";

export default function HomePage() {
  const slides = [
    { image: "/img1.jpg", title: "New Collection", subtitle: "Shop Now" },
    { image: "/img2.jpg", title: "Summer Sale", subtitle: "Up to 50% Off" },
  ];

  const products = [
    { image: "/p1.jpg", title: "Jacket", price: 49, rating: 4.5 },
    { image: "/p2.jpg", title: "Sweater", price: 39, rating: 4.8 },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 py-6">
      <CustomSlider slides={slides} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
