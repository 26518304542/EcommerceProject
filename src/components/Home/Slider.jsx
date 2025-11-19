import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*
  Simple wrapper for react-slick.
  Mobile-first: show 1 slide on mobile, change via responsive settings.
  Uses only flex utilities in children (user supplies slide content).
*/

export default function Slider({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobile and up
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024, // tablet/desktop
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <SlickSlider {...settings}>
        {slides.map((s, i) => (
          <div key={i} className="w-full relative">
            {/* full-bleed hero image */}
            {s.image && (
              <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-[420px] sm:h-[520px] md:h-[980px] object-cover "/>
            )}

            {/* overlay content placed left, vertically centered */}
            <div className="relative z-10 flex items-center w-full h-[420px] sm:h-[520px] md:h-[680px]">
              <div className="max-w-7xl w-full mx-auto px-4">
                <div className="flex items-center">
                  <div className="w-full md:w-1/2 text-white">
                    <p className="text-sm uppercase tracking-wide mb-4">Summer 2025</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">{s.title}</h2>
                    {s.subtitle && <p className="text-sm sm:text-base text-white/90 mb-6">{s.subtitle}</p>}
                    <button className="inline-block bg-[#2fb86a] text-white px-5 py-3 rounded-md font-medium">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* subtle overlay to darken image for text readability */}
            <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}
