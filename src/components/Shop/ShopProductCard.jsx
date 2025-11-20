import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ShopProductCard
 * Props: { product: { id, title, category, image, price, oldPrice, colors: [hex,...] } }
 * Layout follows the provided spec and uses Tailwind utility classes (flex-only approach)
 */
export default function ShopProductCard({ product }) {
  const { title, category, image, price, oldPrice, colors = [] } = product || {};

  return (
    <article className="w-[239px] h-[488px] bg-white flex flex-col items-start relative">
      {/* image area - fixed height */}
      <div className="w-full h-[300px] relative overflow-hidden bg-gray-100">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      {/* info frame */}
      <div className="w-full flex flex-col items-center px-[25px] pt-[25px] pb-[35px] gap-[10px]">
        <h5 className="w-[131px] text-center font-extrabold text-[16px] leading-6 text-[#252B42]">
          {title}
        </h5>

        <Link to="#" className="w-[146px] text-center font-semibold text-[14px] leading-6 text-[#737373]">
          {category}
        </Link>

        <div className="w-[129.06px] flex flex-row items-start px-[3px] py-[5px] gap-[5px]">
          <div className="w-[52px] text-[16px] font-extrabold leading-6 text-[#BDBDBD] text-center">
            {oldPrice ? `$${oldPrice}` : ''}
          </div>
          <div className="w-[66px] text-[16px] font-extrabold leading-6 text-[#23856D] text-center">
            {price ? `$${price}` : ''}
          </div>
        </div>

        <div className="w-[82.23px] flex flex-row items-center gap-[6.08px]">
          {colors.length === 0 ? (
            <div className="w-4 h-4 rounded-full bg-gray-300" />
          ) : (
            colors.slice(0,4).map((c, i) => (
              <span key={i} className="w-4 h-4 rounded-full" style={{ backgroundColor: c }} />
            ))
          )}
        </div>
      </div>
    </article>
  );
}
