import PropTypes from "prop-types";

export default function ProductCard({ image, title, price, rating, onClick }) {
  return (
    <article
      onClick={onClick}
      className="flex flex-col bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer w-full max-w-[200px] mx-auto"
    >
      {/* Image Wrapper — Figma aspect ratio preserved */}
      <div className="relative w-full h-72 sm:h-64 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-top" /* yüzleri daha fazla gösterir */
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-2 p-4 text-left">
        <h3 className="text-base font-semibold text-gray-800 leading-tight">{title}</h3>
        <p className="text-xs text-gray-500">Graphic Design</p>

        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-semibold text-gray-900">${price}</span>
          <span className="text-sm text-yellow-500 font-medium">★ {rating}</span>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};