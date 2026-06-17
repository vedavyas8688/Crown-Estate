import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { blogPosts } from '../data/blogs'

/* All inline styles for this page, defined once. */
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    width: '100%',
  },
  cardImageLink: {
    display: 'block',
    marginBottom: '28px',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '260px',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 700ms cubic-bezier(0.22,1,0.36,1)',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  subtitle: { margin: 0 },
  dot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: 'var(--accent)',
    display: 'inline-block',
  },
  metaText: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    color: 'var(--paragraphs)',
    letterSpacing: '1px',
  },
  titleLink: { textDecoration: 'none' },
  cardTitle: {
    fontFamily: 'Marcellus, serif',
    fontSize: '22px',
    lineHeight: '1.35',
    color: 'var(--heading)',
    margin: '0 0 14px 0',
    fontWeight: 400,
    transition: 'color 300ms ease',
  },
  excerpt: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '15px',
    lineHeight: '1.7',
    color: 'var(--paragraphs)',
    margin: '0 0 20px 0',
  },
}

export default function BlogPage() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref}>
      {/* ============ HERO ============ */}
      <div className="section-hero page">
        <div className="content">
          <div className="hero-top">
            <div className="border-top" data-hero-reveal></div>
            <img
              src="/images/subtitle.png"
              loading="lazy"
              alt=""
              width="62"
              className="image-subtitle"
              data-hero-reveal
            />
            <div className="subtitle" data-hero-reveal>
              Blog &amp; Insights
              <br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>
              Ideas, Inspiration &amp; Planning Guides
            </h1>
            <p className="paragraph margin" data-hero-reveal>
              Explore event planning tips, venue guides and celebration ideas from the Crown Estate team.
            </p>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div>

      {/* ============ BLOG GRID ============ */}
      <div className="section first">
        <div className="content">
          <div style={styles.grid} className="blog-grid" data-reveal-group>
            {blogPosts.map((post) => (
              <article key={post.slug} data-reveal-child>
                {/* Card image */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="overflow-portfolio w-inline-block"
                  style={styles.cardImageLink}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    style={styles.cardImage}
                    className="blog-card-image"
                  />
                </Link>

                {/* Meta */}
                <div style={styles.meta}>
                  <span className="subtitle" style={styles.subtitle}>{post.eyebrow}</span>
                  <span style={styles.dot}></span>
                  <span style={styles.metaText}>{post.date}</span>
                  <span style={styles.dot}></span>
                  <span style={styles.metaText}>{post.readTime}</span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`} style={styles.titleLink}>
                  <h4 style={styles.cardTitle} className="blog-card-title">
                    {post.title}
                  </h4>
                </Link>

                {/* Excerpt */}
                <p style={styles.excerpt}>{post.excerpt}</p>

                <Link to={`/blog/${post.slug}`} className="link">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
        .blog-card-image:hover { transform: scale(1.04); }
        .blog-card-title:hover { color: var(--accent) !important; }
      `}</style>
    </div>
  )
}