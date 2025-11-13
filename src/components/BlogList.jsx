export default function BlogList({ posts = [] }) {
  return (
    <section className="flex flex-col px-4 gap-4 pb-8">
      <h3 className="text-base font-semibold">Featured Posts</h3>
      <div className="flex flex-row gap-3">
        {posts.map((b, i) => (
          <article key={i} className="flex flex-col items-start gap-3">
            <img src={b.image} alt={b.title} className="w-24 h-16 object-cover rounded" />
            <div className="flex flex-col">
              <h4 className="font-medium">{b.title}</h4>
              <p className="text-xs text-gray-600">{b.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

//FeaturedPosts kısmında kaldım