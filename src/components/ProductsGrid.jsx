import ProductCard from "./ProductCard";

export default function ProductsGrid({ products = [] }) {
  return (
    <section className="flex flex-col px-4 gap-4 justify-center items-center">
      <h2 className="text-base font-semibold">Bestseller Products</h2>
      <p className="text-gray-500 text-sm">
        Problems trying to resolve the conflict between
      </p>

      {/* Ürün grid alanı */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
          w-full
          max-w-5xl
        "
      >
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
