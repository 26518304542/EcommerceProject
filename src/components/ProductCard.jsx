import PropTypes from "prop-types";

/*
  ProductCard is mobile-first.
  Layout uses flex only; "grid" avoided; we rely on flex-wrap parent to form columns.
*/
export default function ProductCard({ image, title, price, rating, onClick }) {
  return (
    <article
      onClick={onClick}
      className="flex flex-col items-center text-center bg-white rounded-lg border p-3 shadow-sm hover:shadow-md transition"
    >
      {/* Ürün görseli */}
      <div className="w-full h-64 overflow-hidden mb-3 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Ürün bilgileri */}
      <h3 className="text-sm font-medium text-gray-800 mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-1">Graphic Design</p>
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-semibold text-gray-800">${price}</span>
        <span className="text-sm text-yellow-500">★ {rating}</span>
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


