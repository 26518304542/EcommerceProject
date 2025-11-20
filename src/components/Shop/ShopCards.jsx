import React from "react";

export default function ShopCards({ images = [] }) {
  return (
    <section className="w-full bg-[#FAFAFA] py-6">
      <div className="w-full mx-auto flex flex-col items-start gap-[18px] px-0 max-w-[333px] md:max-w-[1088px] md:flex-row md:flex-nowrap md:justify-center md:items-start md:gap-[15px]">
        {images.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[332px] h-[300px] bg-white relative overflow-hidden md:w-[205px] md:h-[223px]"
          >
            <img
              src={item.image}
              alt={item.title || "Shop item"}
              className="w-full h-full object-cover"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* card content */}
            <h3
              className="absolute text-white font-bold text-[16px] leading-[24px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-1/2"
              style={{ bottom: '142px' }}
            >
              {item.title || 'CLOTHS'}
            </h3>

            <p
              className="absolute text-white text-[14px] leading-[20px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-1/2"
              style={{ bottom: '108px' }}
            >
              {item.count || '5 items'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
