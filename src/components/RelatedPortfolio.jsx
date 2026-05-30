import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { portfolioDetails, portfolioList } from '../data/portfolio'

export default function RelatedPortfolio({ currentSlug }) {
  const ref = useRef(null)
  useScrollReveal(ref)

  const others = portfolioList
    .filter((slug) => slug !== currentSlug)
    .map((slug) => portfolioDetails[slug])

  return (
    <div className="section" ref={ref}>
      <div className="content">
        <div className="block-heading margin" style={{ textAlign: 'center', alignItems: 'center' }}>
          <img
            src="/images/subtitle.png"
            loading="lazy"
            alt=""
            width="62"
            className="image-subtitle"
            data-reveal
          />
          <div className="subtitle" data-reveal>
            Continue exploring<br />
          </div>
          <h2 className="heading" data-reveal>More from our Events</h2>
        </div>

        <div className="collection-list---portfolio w-dyn-items" data-reveal-group>
          {others.map((p) => (
            <div
              role="listitem"
              className="collection-item---portfolio w-dyn-item"
              key={p.slug}
              data-reveal-child
            >
              <Link
                to={`/portfolio/${p.slug}`}
                className="overflow-portfolio w-inline-block"
                style={{ borderRadius: '16px', overflow: 'hidden', display: 'block' }}
              >
                <img
                  loading="lazy"
                  src={p.teaserImage}
                  alt={p.title}
                  className="image-portfolio"
                />
              </Link>
              <div className="block-portfolio">
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="link-portfolio w-inline-block"
                >
                  <h5 className="heading-portfolio">{p.title}</h5>
                </Link>
                <Link
                  to={`/portfolio/${p.slug}`}
                  className="link"
                >
                  learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}