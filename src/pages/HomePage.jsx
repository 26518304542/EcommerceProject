import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import EditorsPicks from "../components/EditorsPicks";
import ProductsGrid from "../components/ProductsGrid";
import FeaturedBlock from "../components/FeaturedBlock";
import BlogList from "../components/BlogList";
import { Link } from "react-router-dom";
import FeaturedSlider from "../components/FeaturedSlider";

/*
  Mobile-first Home Page layout matching the provided mobile Figma screenshot.
  We use flex + flex-wrap to create columns for products on larger screens.
*/

export default function HomePage() {
  const heroSlides = [
    {
      image: "/images/shop-hero-1-product-slide-1.png",
      title: "New Collection",
      subtitle: "Explore our latest styles",
    },
    {
      image: "/assets/hero-2.jpg",
      title: "Summer Sale",
      subtitle: "Up to 50% off select items",
    },
  ];

  const products = [
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

  const featured = [
    {
      image: "/images/shop-hero-2-png-picture-1.png",
      title: "Vita Classic Product",
      cta: "Shop Now",
    },
    {
      image: "/images/bestsellers/col-md-6.png",
      title: "Holiday Looks",
      cta: "Read More",
    },
  ];

  const blogPosts = [
    {
      image: "/images/featuredposts/fixed-height (7).png",
      title: "City travel guide for 2025",
      excerpt: "Top city spots and packing tips.",
    },
    {
      image: "/images/featuredposts/fixed-height.png",
      title: "Colorful summer picks",
      excerpt: "Bright and bold outfit ideas.",
    },
    {
      image: "/images/featuredposts/fixed-height (1).png",
      title: "Colorful summer picks",
      excerpt: "Bright and bold outfit ideas.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Hero Slider */}
      {<section className="w-full">
        <Slider slides={heroSlides} />
      </section>}

      {/* Editors Picks */}
      <EditorsPicks products={products.slice(0, 4)} />

      {/* Products grid */}
      <ProductsGrid products={products} />

      {/* Featured full-width blocks */}
      <FeaturedSlider items={featured} />

      <FeaturedBlock items={featured.slice(1,2)} />

      {/* Blog / Featured posts */}
      <BlogList posts={blogPosts} />
    </div>
  );
}
