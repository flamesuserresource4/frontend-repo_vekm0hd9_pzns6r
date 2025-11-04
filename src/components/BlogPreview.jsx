import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Designing with Pastels for Fintech',
    excerpt:
      'How soft color palettes can increase trust and reduce friction in financial UX.',
    date: 'Oct 5, 2025',
    tag: 'Design',
  },
  {
    id: 2,
    title: 'Pricing Pages that Convert',
    excerpt:
      'Lessons from hundreds of SaaS landing pages on clarity, contrast, and hierarchy.',
    date: 'Oct 12, 2025',
    tag: 'Growth',
  },
  {
    id: 3,
    title: 'Authentication UX Essentials',
    excerpt:
      'Balancing security with simplicity across email magic links and OAuth flows.',
    date: 'Oct 18, 2025',
    tag: 'Product',
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="relative w-full bg-gradient-to-b from-white to-pink-50/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-3 text-slate-600">Insights on design, growth, and product.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div
                className={`h-36 w-full bg-gradient-to-br ${
                  idx === 0
                    ? 'from-sky-200 via-white to-violet-200'
                    : idx === 1
                    ? 'from-pink-200 via-white to-amber-200'
                    : 'from-teal-200 via-white to-emerald-200'
                }`}
              />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-700">{post.tag}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">{post.excerpt}</p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-sky-600 hover:text-sky-700"
                  onClick={() => alert('Blog post detail page will be wired to the backend later.')}
                >
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
