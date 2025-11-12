export default function FeaturedBlock({ items = [] }) {
  return (
    <section className="flex flex-col gap-4 px-4">
      {items.map((f, i) => (
        <div
          key={i}
          className={`flex items-center justify-between w-full rounded-md overflow-hidden ${i === 0 ? 'bg-[#1f8f75]' : 'bg-[#f3f3f3]'}`}
        >
          <div className="flex flex-col p-4">
            <h4 className={i === 0 ? "text-white font-bold text-lg" : "text-black font-bold text-lg"}>
              {f.title}
            </h4>
            <button className={i === 0 ? "mt-3 inline-block bg-white text-sm font-medium px-3 py-2 rounded" : "mt-3 inline-block bg-black text-white text-sm font-medium px-3 py-2 rounded"}>
              {f.cta}
            </button>
          </div>

          <div className="hidden sm:flex items-center">
            <img src={f.image} alt={f.title} className="w-32 h-32 object-cover" />
          </div>
        </div>
      ))}
    </section>
  );
}
