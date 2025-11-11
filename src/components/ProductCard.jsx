export default function ProductCard({ image, title, price, rating }) {
  return (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
      <h3 className="font-semibold text-base mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">${price}</p>
      <p className="text-yellow-500">⭐ {rating}</p>
    </div>
  );
}
