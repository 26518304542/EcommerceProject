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
    arrows: false,
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
    <div className="w-full">
      <SlickSlider {...settings}>
        {slides.map((s, i) => (
          <div key={i} className="flex items-center justify-center w-full">
            {/* slide content should itself use flex utilities */}
            <div className="flex flex-col items-start justify-center w-full px-4 py-6">
              {s.image && (
                <img src={s.image} alt={s.title} className="w-full h-56 object-cover rounded-sm mb-4" />
              )}
              <h2 className="text-xl font-bold mb-1">{s.title}</h2>
              {s.subtitle && <p className="text-sm text-gray-600">{s.subtitle}</p>}
            </div>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
}
