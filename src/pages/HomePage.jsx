import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

/*
  Mobile-first Home Page layout matching the provided mobile Figma screenshot.
  We use flex + flex-wrap to create columns for products on larger screens.
*/

export default function HomePage() {
  const heroSlides = [
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
  ];

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
      image: "/assets/feature-1.jpg",
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
      <section className="w-full">
        <Slider slides={heroSlides} />
      </section>

      {/* Editors Picks small row (vertical cards in mobile screenshot) */}
      <section className="flex flex-col px-4 gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Editor's Picks</h3>
          <Link to="/shop" className="text-sm text-gray-600">See all</Link>
        </div>

        <div className="flex overflow-x-auto gap-3 pb-2">
          {/* horizontal small product cards (mobile style) */}
          {products.slice(0, 6).map((p, i) => (
            <div key={i} className="flex-shrink-0 w-36">
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </section>

      {/* Products grid (flex-wrap to create columns on larger screens) */}
      <section className="flex flex-col px-4 gap-4">
        <h3 className="text-base font-semibold">Popular Products</h3>

        <div className="flex flex-wrap -mx-2">
          {products.map((p, i) => (
            <div
              key={i}
              style={{ width: "50%" }}
              className="px-2 mb-4 sm:mb-6"
            >
              {/* For mobile: 2 columns (50%). For larger screens we'll use the same width but container expands */}
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured full-width blocks (green block in the design) */}
      <section className="flex flex-col gap-4 px-4">
        {featured.map((f, i) => (
          <div
            key={i}
            className="flex items-center justify-between w-full rounded-md overflow-hidden"
            style={{ background: i === 0 ? "#1f8f75" : "#f3f3f3" }}
          >
            <div className="flex flex-col p-4">
              <h4 className="text-white font-bold text-lg">{f.title}</h4>
              <button className="mt-3 inline-block bg-white text-sm font-medium px-3 py-2 rounded">
                {f.cta}
              </button>
            </div>
            <div className="hidden sm:flex items-center">
              <img src={f.image} alt={f.title} className="w-32 h-32 object-cover" />
            </div>
          </div>
        ))}
      </section>

      {/* Blog / Featured posts */}
      <section className="flex flex-col px-4 gap-4 pb-8">
        <h3 className="text-base font-semibold">Featured Posts</h3>
        <div className="flex flex-col gap-3">
          {blogPosts.map((b, i) => (
            <article key={i} className="flex items-start gap-3">
              <img src={b.image} alt={b.title} className="w-24 h-16 object-cover rounded" />
              <div className="flex flex-col">
                <h4 className="font-medium">{b.title}</h4>
                <p className="text-xs text-gray-600">{b.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
