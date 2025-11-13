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
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/40 hover:bg-white/70 text-white hover:text-gray-800 rounded-full p-2 transition"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/40 hover:bg-white/70 text-white hover:text-gray-800 rounded-full p-2 transition"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export default function FeaturedSlider({ items = [] }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative flex flex-col px-4">
      <SlickSlider {...settings}>
        {items.map((f, i) => (
          <div key={i} className="px-2">
            <div
              className={`flex flex-col md:flex-row items-center justify-between w-full rounded-2xl overflow-hidden ${
                i === 0 ? "bg-[#1f8f75]" : "bg-[#f3f3f3]"
              } ${i === 0 ? "min-h-[600px]" : "min-h-[600px]"}`}
            >
              {/* Left text */}
              <div
                className={`flex flex-col justify-center ${
                  i === 0 ? "text-white" : "text-black"
                } px-8 md:px-16 py-10 md:py-0`}
              >
                <h4
                  className={`font-extrabold leading-tight ${
                    i === 0
                      ? "text-4xl md:text-5xl mb-6"
                      : "text-2xl md:text-3xl mb-4"
                  }`}
                >
                  {f.title}
                </h4>
                <button
                  className={`w-fit mt-2 px-6 py-3 rounded-md text-sm font-semibold transition ${
                    i === 0
                      ? "bg-white text-[#1f8f75] hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  {f.cta}
                </button>
              </div>

              {/* Right image */}
              <div className="flex justify-center items-center w-full md:w-1/2 px-6 md:px-12">
                <img
                  src={f.image}
                  alt={f.title}
                  className={`object-contain transition-transform duration-500 ${
                    i === 0
                      ? "w-[400px] md:w-[520px] hover:scale-105"
                      : "w-[280px] md:w-[340px] hover:scale-105"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </section>
  );
}
