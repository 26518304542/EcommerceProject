import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/60 md:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-md"
    >
      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/60 md:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-md"
    >
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
}

export default function FeaturedSlider({ items = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative w-full px-0 md:px-4 py-10 md:py-12">
      <SlickSlider {...settings}>
        {items.map((f, i) => (
          <div key={i} className="px-0 md:px-2">
            <div
              className={`flex flex-col md:flex-row items-center justify-between rounded-xl overflow-hidden
              ${i === 0 ? "bg-[#1f8f75]" : "bg-[#f3f3f3]"}
              md:min-h-[500px]`}
            >
              {/* TEXT */}
              <div
                className={`flex flex-col justify-center
                w-full md:w-1/2
                px-8 md:px-20 py-10
                ${i === 0 ? "text-white" : "text-black"}

                /* MOBILE Figma style */
                text-center md:text-left
                items-center md:items-start
              `}
              >
                <p className="text-xs md:text-sm uppercase tracking-wider opacity-80 mb-2 md:mb-3">
                  {f.subtitle}
                </p>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
                  {f.title}
                </h2>

                <p className="text-sm md:text-lg opacity-90 mb-6 md:mb-8 max-w-[320px] md:max-w-none">
                  {f.description}
                </p>

                <button
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition
                  ${i === 0 ? "bg-white text-[#1f8f75]" : "bg-black text-white"}
                `}
                >
                  {f.cta}
                </button>
              </div>

              {/* IMAGE */}
              <div
                className="flex justify-center items-center
                w-full md:w-1/2
                mb-6 md:mb-0"
              >
                <img
                  src={f.image}
                  alt={f.title}
                  className={`object-contain transition-transform duration-500
                  w-[220px] sm:w-[280px] md:w-[420px] lg:w-[520px]
                  hover:scale-105
                `}
                />
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </section>
  );
}
