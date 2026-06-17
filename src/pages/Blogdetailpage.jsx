import { useRef, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { blogPosts, BLOG_BANNER } from '../data/blogs'
import Seo from '../components/Seo'

/* Turn a heading into a stable anchor id (used for deep linking) */
const slugify = (s = '') =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')

/* ------------------------------------------------------------------ */
/*  Paragraph segments — supports inline links                         */
/* ------------------------------------------------------------------ */
function Segments({ text, segments }) {
  if (segments && segments.length) {
    return (
      <>
        {segments.map((s, i) =>
          s.href ? (
            <a
              key={i}
              href={s.href}
              className="bd-link"
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {s.text}
            </a>
          ) : (
            <span key={i}>{s.text}</span>
          )
        )}
      </>
    )
  }
  return <>{text}</>
}

/* ------------------------------------------------------------------ */
/*  Numbered steps                                                     */
/* ------------------------------------------------------------------ */
function Steps({ block }) {
  return (
    <ol className="bd-steps-list">
      {block.items.map((step, i) => (
        <li className="bd-step" key={i}>
          <div className="bd-step-num">{String(i + 1).padStart(2, '0')}</div>
          <div className="bd-step-body">
            <h3 className="bd-step-title">{step.title}</h3>
            {step.text && <p className="bd-p">{step.text}</p>}
            {step.items && (
              <ul className="bd-list">
                {step.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            )}
            {step.note && <p className="bd-step-note">{step.note}</p>}
          </div>
        </li>
      ))}
    </ol>
  )
}

/* ------------------------------------------------------------------ */
/*  FAQ accordion                                                      */
/* ------------------------------------------------------------------ */
function Faq({ block }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="bd-faq">
      {block.title && (
        <h2 id={slugify(block.title)} className="bd-h2">
          {block.title}
        </h2>
      )}
      <div className="bd-faq-list">
        {block.items.map((item, i) => {
          const isOpen = open === i
          return (
            <div className={`bd-faq-item${isOpen ? ' is-open' : ''}`} key={i}>
              <button
                type="button"
                className="bd-faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="bd-faq-icon" aria-hidden="true">+</span>
              </button>
              <div className="bd-faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Content block dispatcher                                           */
/* ------------------------------------------------------------------ */
function Block({ block }) {
  switch (block.type) {
    case 'lead':
      return (
        <p className="bd-lead">
          <Segments text={block.text} segments={block.segments} />
        </p>
      )
    case 'paragraph':
      return (
        <p className="bd-p">
          <Segments text={block.text} segments={block.segments} />
        </p>
      )
    case 'heading':
      return (
        <h2 id={slugify(block.text)} className="bd-h2">
          {block.text}
        </h2>
      )
    case 'subheading':
      return <h3 className="bd-h3">{block.text}</h3>
    case 'list':
      return (
        <ul className="bd-list">
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <figure className="bd-figure">
          <img src={block.src} alt={block.alt || ''} loading="lazy" />
        </figure>
      )
    case 'quote':
      return <blockquote className="bd-quote">{block.text}</blockquote>
    case 'steps':
      return <Steps block={block} />
    case 'faq':
      return <Faq block={block} />
    default:
      return null
  }
}

/* ------------------------------------------------------------------ */
/*  More from the blog — uses the same card design as the list page    */
/* ------------------------------------------------------------------ */
function MorePosts({ currentSlug }) {
  const others = blogPosts.filter((p) => p.slug !== currentSlug)
  if (!others.length) return null

  return (
    <section className="bd-related">
      <div className="bd-related-inner">
        <div className="bd-related-head">
          <div className="bd-related-eyebrow">Continue reading</div>
          <h2 className="bd-related-title">More from the blog</h2>
        </div>

        <div className="bd-related-grid">
          {others.map((post) => (
            <article key={post.slug} className="bd-rc">
              <Link to={`/blog/${post.slug}`} className="bd-rc-img">
                <img src={post.image} alt={post.title} loading="lazy" />
              </Link>

              <div className="bd-rc-meta">
                <span className="bd-rc-eyebrow">{post.eyebrow}</span>
                <span className="bd-dot" />
                <span className="bd-rc-date">{post.date}</span>
                <span className="bd-dot" />
                <span className="bd-rc-date">{post.readTime}</span>
              </div>

              <Link to={`/blog/${post.slug}`} className="bd-rc-title">
                {post.title}
              </Link>

              <p className="bd-rc-excerpt">{post.excerpt}</p>

              <Link to={`/blog/${post.slug}`} className="link">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function BlogDetailPage() {
  const { slug } = useParams()
  const ref = useRef(null)
  useScrollReveal(ref)

  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  return (
    <div ref={ref}>
       <Seo
      title={post.metaTitle || post.title}
       description={post.metaDescription || post.excerpt}
     keywords={post.keywords}
       /> 

      {/* ============ HERO ============ */}
      <header className="bd-hero">
        <img
          className="bd-hero-img"
          src={BLOG_BANNER}
          alt={post.title}
          loading="eager"
        />
        <div className="bd-hero-scrim" />
        <div className="bd-hero-inner">
          <Link to="/blog" className="bd-back" data-hero-reveal>
            ← Back to all articles
          </Link>
          <div className="bd-hero-text">
            {/* <div className="bd-eyebrow" data-hero-reveal>
              {post.eyebrow}
            </div> */}
            <h1 className="bd-title" data-hero-reveal>
              {post.title}
            </h1>
            <div className="bd-hero-meta" data-hero-reveal>
              <span>{post.date}</span>
              <span className="bd-dot" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ ARTICLE (full-width, centered, no sidebar) ============ */}
      <div className="bd-section">
        <article className="bd-body">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* CTA */}
          <div className="bd-cta">
            <div className="bd-cta-script">Ready to celebrate?</div>
            <p>
              Crown Estate is a luxury 4-acre private estate on Airport Road,
              Bangalore — perfect for weddings, celebrations, corporate events
              and weekend stays.
            </p>
            <Link to="/contact" className="button w-button bd-cta-btn">
              Get in touch
            </Link>
          </div>
        </article>
      </div>

      {/* ============ MORE FROM THE BLOG ============ */}
      <MorePosts currentSlug={slug} />

      <style>{`
        /* ---------- HERO ---------- */
        .bd-hero { position: relative; width: 100%; height: clamp(380px, 60vh, 600px); overflow: hidden; }
        .bd-hero-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .bd-hero-scrim { position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(2,67,75,0.10) 0%, rgba(2,67,75,0.35) 45%, rgba(2,67,75,0.88) 100%); }
        .bd-hero-inner { position: absolute; inset: 0; max-width: 1180px; margin: 0 auto;
          padding: 40px 24px; display: flex; flex-direction: column; justify-content: space-between; }
        .bd-back { align-self: flex-start; font-family: 'Montserrat', sans-serif; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase; color: #fff; text-decoration: none;
          opacity: .85; transition: opacity .3s ease; }
        .bd-back:hover { opacity: 1; }
        .bd-hero-text { max-width: 780px; }
        .bd-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 12px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--accent); margin-bottom: 18px; }
        .bd-title { font-family: 'Marcellus', serif; font-weight: 400; color: #fff;
          font-size: clamp(30px, 5vw, 54px); line-height: 1.12; margin: 0 0 22px 0; }
        .bd-hero-meta { display: flex; align-items: center; gap: 14px; font-family: 'Montserrat', sans-serif;
          font-size: 13px; letter-spacing: 1px; color: rgba(255,255,255,.85); }
        .bd-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); display: inline-block; }

        /* ---------- ARTICLE BODY (centered, full width) ---------- */
        .bd-section { padding: clamp(56px, 8vw, 100px) 24px; }
        .bd-body { max-width: 800px; margin: 0 auto; }
        .bd-body > *:first-child { margin-top: 0; }
        .bd-lead { font-family: 'Montserrat', sans-serif; font-size: clamp(18px, 2.4vw, 21px);
          line-height: 1.7; color: var(--heading); margin: 0 0 30px 0; }
        .bd-p { font-family: 'Montserrat', sans-serif; font-size: 17px; line-height: 1.85;
          color: var(--paragraphs); margin: 0 0 26px 0; }
        .bd-h2 { font-family: 'Marcellus', serif; font-weight: 400; font-size: clamp(26px, 3.2vw, 32px);
          line-height: 1.25; color: var(--heading); margin: 56px 0 20px 0; scroll-margin-top: 100px; }
        .bd-h3 { font-family: 'Marcellus', serif; font-weight: 400; font-size: 22px; line-height: 1.35;
          color: var(--heading); margin: 32px 0 12px 0; }
        .bd-list { list-style: none; margin: 0 0 26px 0; padding: 0; }
        .bd-list li { position: relative; padding-left: 26px; margin-bottom: 12px;
          font-family: 'Montserrat', sans-serif; font-size: 16px; line-height: 1.7; color: var(--paragraphs); }
        .bd-list li::before { content: ''; position: absolute; left: 3px; top: 9px; width: 7px; height: 7px;
          border: 1px solid var(--accent); transform: rotate(45deg); }
        .bd-figure { margin: 44px 0; border-radius: 4px; overflow: hidden; }
        .bd-figure img { width: 100%; max-height: 520px; object-fit: cover; display: block; }
        .bd-quote { border-left: 2px solid var(--accent); margin: 40px 0; padding: 6px 28px;
          font-family: 'Marcellus', serif; font-size: 22px; line-height: 1.6; color: var(--heading); }

        /* ---------- INLINE LINKS ---------- */
        .bd-link { color: var(--accent); text-decoration: none; border-bottom: 1px solid var(--accent);
          transition: color .25s ease, border-color .25s ease; }
        .bd-link:hover { color: var(--heading); border-bottom-color: var(--heading); }

        /* ---------- STEPS ---------- */
        .bd-steps-list { list-style: none; margin: 30px 0 0 0; padding: 0; }
        .bd-step { display: grid; grid-template-columns: 56px 1fr; gap: 22px; padding-bottom: 36px; }
        .bd-step:not(:last-child) { border-bottom: 1px solid var(--border); margin-bottom: 36px; }
        .bd-step-num { font-family: 'Marcellus', serif; font-size: 30px; line-height: 1; color: var(--accent); }
        .bd-step-title { font-family: 'Marcellus', serif; font-weight: 400; font-size: 23px;
          line-height: 1.3; color: var(--heading); margin: 2px 0 14px 0; }
        .bd-step .bd-p { margin-bottom: 16px; }
        .bd-step-note { font-family: 'Montserrat', sans-serif; font-size: 15px; line-height: 1.7;
          color: var(--paragraphs); font-style: italic; margin: 4px 0 0 0; opacity: .9; }

        /* ---------- FAQ ---------- */
        .bd-faq-list { margin-top: 26px; border-top: 1px solid var(--border); }
        .bd-faq-item { border-bottom: 1px solid var(--border); }
        .bd-faq-q { width: 100%; background: none; border: none; cursor: pointer; text-align: left;
          display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 22px 0;
          font-family: 'Marcellus', serif; font-size: 19px; line-height: 1.4; color: var(--heading); }
        .bd-faq-icon { font-family: 'Montserrat', sans-serif; font-size: 24px; line-height: 1;
          color: var(--accent); transition: transform .3s ease; flex: none; }
        .bd-faq-item.is-open .bd-faq-icon { transform: rotate(45deg); }
        .bd-faq-a { max-height: 0; overflow: hidden; transition: max-height .35s ease; }
        .bd-faq-item.is-open .bd-faq-a { max-height: 420px; }
        .bd-faq-a p { font-family: 'Montserrat', sans-serif; font-size: 16px; line-height: 1.8;
          color: var(--paragraphs); margin: 0 0 22px 0; }

        /* ---------- CTA ---------- */
        .bd-cta { background: var(--preload); border: 1px solid var(--border); padding: 40px 36px;
          margin-top: 64px; display: flex; flex-direction: column; gap: 14px; border-radius: 4px; }
        .bd-cta-script { font-family: 'Homemade Apple', cursive; font-size: 24px; color: var(--accent); }
        .bd-cta p { font-family: 'Montserrat', sans-serif; font-size: 15px; line-height: 1.7;
          color: var(--paragraphs); margin: 0; }
        .bd-cta-btn { align-self: flex-start; margin-top: 8px; }

        /* ---------- MORE FROM THE BLOG ---------- */
        .bd-related { border-top: 1px solid var(--border); padding: clamp(56px, 8vw, 100px) 24px; }
        .bd-related-inner { max-width: 1180px; margin: 0 auto; }
        .bd-related-head { text-align: center; margin-bottom: 56px; }
        .bd-related-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 15px; letter-spacing: 3px;
          text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
        .bd-related-title { font-family: 'Marcellus', serif; font-weight: 400;
          font-size: clamp(26px, 3.4vw, 36px); color: var(--heading); margin: 0; }
        .bd-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; width: 100%; }
        .bd-rc-img { display: block; border-radius: 12px; overflow: hidden; margin-bottom: 28px; }
        .bd-rc-img img { width: 100%; height: 260px; object-fit: cover; display: block;
          transition: transform 700ms cubic-bezier(.22,1,.36,1); }
        .bd-rc-img:hover img { transform: scale(1.04); }
        .bd-rc-meta { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
        .bd-rc-eyebrow { font-family: 'Montserrat', sans-serif; font-size: 11px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--accent); }
        .bd-rc-date { font-family: 'Montserrat', sans-serif; font-size: 12px; color: var(--paragraphs);
          letter-spacing: 1px; }
        .bd-rc-title { font-family: 'Marcellus', serif; font-weight: 400; font-size: 22px; line-height: 1.35;
          color: var(--heading); margin: 0 0 14px 0; text-decoration: none; display: block;
          transition: color .3s ease; }
        .bd-rc-title:hover { color: var(--accent); }
        .bd-rc-excerpt { font-family: 'Montserrat', sans-serif; font-size: 15px; line-height: 1.7;
          color: var(--paragraphs); margin: 0 0 20px 0; }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 991px) {
          .bd-related-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .bd-step { grid-template-columns: 1fr; gap: 6px; }
          .bd-step-num { font-size: 26px; }
          .bd-related-grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bd-faq-a, .bd-faq-icon, .bd-rc-img img { transition: none; }
        }
      `}</style>
    </div>
  )
}