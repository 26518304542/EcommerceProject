import React from 'react';

export default function DetailCard({
  image = '/images/card-1.jpg',
  title = 'Graphic Design',
  category = 'English Department',
  oldPrice = '$16.48',
  price = '$6.48',
}){
  return (
    <article className="w-[332px] md:w-[239px] bg-white rounded-md overflow-hidden shadow-sm" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="w-full h-[427px] md:h-[280px] bg-gray-100 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="px-6 py-6">
        <h5 className="text-[16px] font-bold text-[#252B42] mb-1">{title}</h5>
        <div className="text-[14px] font-semibold text-[#737373] mb-3">{category}</div>

        <div className="flex items-center gap-3">
          <div className="text-[16px] font-bold text-[#BDBDBD] line-through">{oldPrice}</div>
          <div className="text-[16px] font-bold text-[#23856D]">{price}</div>
        </div>
      </div>
    </article>
  );
}