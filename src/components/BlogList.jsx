export default function BlogList({ posts = [] }) {
  return (
    <section className="flex flex-col items-center px-6 gap-6 pb-12">
      <h3 className="text-lg font-semibold tracking-tight">Featured Posts</h3>

      {/* MOBIL = flex-col, DESKTOP = flex-row */}
      <div
        className="
          flex flex-col md:flex-row
          gap-6
          w-full md:w-4/5 lg:w-3/4
          justify-center
        "
      >
        {posts.map((b, i) => (
          <article
            key={i}
            className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden md:flex-1"
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-48 object-cover"
            />

            <div className="flex flex-col gap-2 p-4">
              <h4 className="font-semibold text-base leading-snug hover:text-blue-600 transition-colors">
                {b.title}
              </h4>
              <p className="text-sm text-gray-600 line-clamp-3">{b.excerpt}</p>
              <span className="text-xs text-gray-400 mt-2">
                {b.date || ""}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
