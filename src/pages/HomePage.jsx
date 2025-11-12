import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import EditorsPicks from "../components/EditorsPicks";
import ProductsGrid from "../components/ProductsGrid";
import FeaturedBlock from "../components/FeaturedBlock";
import BlogList from "../components/BlogList";
import { Link } from "react-router-dom";

/*
  Mobile-first Home Page layout matching the provided mobile Figma screenshot.
  We use flex + flex-wrap to create columns for products on larger screens.
*/

export default function HomePage() {
  /*const heroSlides = [
    {
      image: "/assets/hero-1.jpg",
      title: "New Collection",
      subtitle: "Explore our latest styles",
    },
    {
      image: "/assets/hero-2.jpg",
      title: "Summer Sale",
      subtitle: "Up to 50% off select items",
    },
  ];*/

  const products = [
    { image: "/assets/p1.jpg", title: "Beige Trench Coat", price: "89", rating: 4.6 },
    { image: "/assets/p2.jpg", title: "Casual Knit Sweater", price: "49", rating: 4.8 },
    { image: "/assets/p3.jpg", title: "Floral Dress", price: "69", rating: 4.5 },
    { image: "/assets/p4.jpg", title: "Chic Jumpsuit", price: "74", rating: 4.7 },
    { image: "/assets/p5.jpg", title: "Light Top", price: "29", rating: 4.2 },
    { image: "/assets/p6.jpg", title: "Pleated Skirt", price: "39", rating: 4.4 },
    // add more as needed...
  ];

  const featured = [
    {
      image: "public/images/shop-hero-2-png-picture-1.png",
      title: "Vita Classic Product",
      cta: "Shop Now",
    },
    {
      image: "/assets/feature-2.jpg",
      title: "Holiday Looks",
      cta: "Read More",
    },
  ];

  const blogPosts = [
    {
      image: "/assets/blog-1.jpg",
      title: "City travel guide for 2025",
      excerpt: "Top city spots and packing tips.",
    },
    {
      image: "/assets/blog-2.jpg",
      title: "Colorful summer picks",
      excerpt: "Bright and bold outfit ideas.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Hero Slider */}
      {/*<section className="w-full">
        <Slider slides={heroSlides} />
      </section>*/}

      {/* Editors Picks */}
      <EditorsPicks products={products.slice(0, 4)} />

      {/* Products grid */}
      <ProductsGrid products={products} />

      {/* Featured full-width blocks */}
      <FeaturedBlock items={featured} />

      {/* Blog / Featured posts */}
      <BlogList posts={blogPosts} />
    </div>
  );
}
