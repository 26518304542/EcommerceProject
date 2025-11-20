import React from 'react';
import ShopProductCard from './ShopProductCard';

// Example product data — replace or pass real data via props if desired
const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Graphic Design`,
  category: `English Department`,
  image: `/assets/product-${(i % 6) + 1}.jpg`,
  price: (18.48).toFixed(2),
  oldPrice: (36.96).toFixed(2),
  colors: ['#23A6F0', '#23856D', '#E77C40', '#23856D'],
}));

export default function DesktopProductCards({ products = sampleProducts }) {
  return (
    <section className="relative w-full flex flex-col items-center py-[48px] gap-[48px]">
      <div className="relative max-w-[1124px] w-full flex flex-col items-center">
        {/* rows: wrap into 4-cols on desktop */}
        <div className="w-full flex flex-row flex-wrap justify-center gap-[30px]">
          {products.map((p) => (
            <div key={p.id} className="flex-none">
              <ShopProductCard product={p} />
            </div>
          ))}
        </div>

        {/* pagination stub */}
        <div className="mt-8 flex items-center justify-center">
          <div className="w-[313px] h-[74px] bg-white border border-[#BDBDBD] shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-[6.72761px] flex items-center">
            <ul className="flex w-full">
              <li className="flex-0">
                <button className="w-[83px] h-[74px] bg-[#F3F3F3] border-r border-[#BDBDBD] flex items-center justify-center font-semibold">First</button>
              </li>
              <li className="flex-1 flex">
                <button className="w-[46px] h-[74px] border-r border-[#E9E9E9] flex items-center justify-center">1</button>
                <button className="w-[49px] h-[74px] bg-[#23A6F0] text-white border-r border-[#E9E9E9] flex items-center justify-center">2</button>
                <button className="w-[49px] h-[74px] border-r border-[#E9E9E9] flex items-center justify-center">3</button>
              </li>
              <li className="flex-0">
                <button className="w-[85px] h-[74px] border-l border-[#E8E8E8] flex items-center justify-center font-semibold">Next</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
