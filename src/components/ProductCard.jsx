import PropTypes from "prop-types";

/*
  ProductCard is mobile-first.
  Layout uses flex only; "grid" avoided; we rely on flex-wrap parent to form columns.
*/
export default function ProductCard({ image, title, price, rating, onClick }) {
  return (
    <article
      className="flex flex-col items-stretch justify-start p-3 bg-white rounded-lg border"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-full h-44 mb-3 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="text-sm font-medium leading-tight mb-1">{title}</h3>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-gray-600">${price}</span>
          <span className="text-sm text-yellow-500">★ {rating}</span>
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


