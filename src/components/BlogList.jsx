export default function BlogList({ posts = [] }) {
  return (
    <section className="flex flex-col items-center px-6 gap-6 pb-12 ">
      <h3 className="text-lg font-semibold tracking-tight">Featured Posts</h3>

      <div className="flex gap-6 sm:grid-cols-2 lg:grid-cols-3 w-1/2 jusify-center ">
        {posts.map((b, i) => (
          <article
            key={i}
            className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
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
