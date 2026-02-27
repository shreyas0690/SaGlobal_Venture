const posts = [
  {
    image: '/images/blog-1.png',
    category: 'Sawmill',
    title: 'The ultimate guide to the types of timber flooring',
    date: 'Mar 5, 2023',
    comments: 0
  },
  {
    image: '/images/service-building.png',
    category: 'Sawmill',
    title: 'Exploring the best wood species for your DIY woodworking',
    date: 'Mar 4, 2023',
    comments: 0
  },
  {
    image: '/images/service-forestry.png',
    category: 'Sawmill',
    title: 'Getting new furniture is exciting with our quality timber',
    date: 'Mar 3, 2023',
    comments: 0
  },
  {
    image: '/images/service-logging.png',
    category: 'Sawmill',
    title: 'From logs to lumber: how to choose the perfect sawmill',
    date: 'Mar 2, 2023',
    comments: 0
  },
]

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Latest Articles</span>
          <h2 className="section-title">Recent News</h2>
        </div>

        <div className="blog__grid">
          {posts.map((post, i) => (
            <article key={i} className="blog__card">
              <div className="blog__card-image">
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="blog__card-category">{post.category}</span>
              </div>
              <div className="blog__card-body">
                <div className="blog__card-meta">
                  <span className="blog__card-date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {post.date}
                  </span>
                  <span className="blog__card-comments">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    {post.comments} Comments
                  </span>
                </div>
                <h3 className="blog__card-title">
                  <a href="#">{post.title}</a>
                </h3>
                <a href="#" className="blog__card-link">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
