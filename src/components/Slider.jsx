import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={slide.image} alt={slide.title} className="w-full h-auto" />
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{slide.title}</h2>
              <p className="text-sm text-gray-600">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

//Bağımlılıklar yüklenecek satır:"lucide-react", "react-slick" ve "slick-carousel" kütüphanelerini import ediyorsun ama bunlar yüklü değil.
