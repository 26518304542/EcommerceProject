export default function FeaturedBlock({ items = [] }) {
  return (
    <section className="flex flex-col gap-8 px-4">
      {items.map((f, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row items-center justify-center w-full rounded-2xl overflow-hidden bg-[#f3f3f3] min-h-[600px] `}
        >
          {/* Sağ taraf: Ürün görseli */}
          <div className="flex justify-center items-center w-full md:w-1/2 px-6 md:px-12">
            <img
              src={f.image}
              alt={f.title}
              className={`object-contain transition-transform duration-500 ${
                i === 0
                  ? "w-[500px] md:w-[800px] hover:scale-105"
                  : "w-[280px] md:w-[700px] hover:scale-105"
              }`}
            />
          </div>

          {/* Sol taraf: Başlık ve buton */}
          <div
            className={`flex flex-col justify-center text-black px-8 md:px-16 py-10 md:py-0`}
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
            <p>We know how large objects will act,<br/>
              but things on a small scale.
            </p>
            <div className="flex gap-7">
                <button
                  className={`w-fit mt-2 px-6 py-3 rounded-md text-sm font-semibold transition ${
                    i === 0
                      ? "bg-[#2DC071] text-white hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  BUY NOW
                </button>
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

          </div>


        </div>
      ))}
    </section>
  );
}

