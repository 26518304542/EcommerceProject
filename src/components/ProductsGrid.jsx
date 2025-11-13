import ProductCard from "./ProductCard";

export default function ProductsGrid({ products = [] }) {
  return (
    <section className="flex flex-col px-4 gap-4 justify-center items-center">
      <h3 className="text-base font-semibold">Popular Products</h3>

      <div className="flex flex-wrap justify-center w-1/2 ">
        {products.map((p, i) => (
          <div key={i} className="flex-[0_0_25%] m-0 p-0 justify-center">
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
