import React from "react";

export default function ShopCards({ images = [] }) {
  return (
    <section className="w-full  mx-auto  bg-red-700">
      {/* Outer container (1440 x 271) */}
      <div className="w-full h-[271px] flex items-center justify-center bg-black">
        {/* Inner container (1088 x 271) */}
        <div className="w-[1088px] h-[271px] flex items-center bg-green-500">
          {/* Image wrapper (1088 x 223) */}
          <div className="w-[1088px] h-[223px] flex gap-4 items-center justify-between bg-blue-800">
            {images.slice(0, 5).map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt="Shop item"
                className="w-[205px] h-[223px] object-cover rounded-none shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}