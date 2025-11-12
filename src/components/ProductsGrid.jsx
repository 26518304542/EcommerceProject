import ProductCard from "./ProductCard";

export default function ProductsGrid({ products = [] }) {
  return (
    <section className="flex flex-col px-4 gap-4">
      <h3 className="text-base font-semibold">Popular Products</h3>

      <div className="flex flex-wrap -mx-2">
        {products.map((p, i) => (
          <div key={i} className="w-1/2 px-2 mb-4 sm:mb-6">
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
