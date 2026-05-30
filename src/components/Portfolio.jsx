import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { portfolio } from '../data/content'

export default function Portfolio() {
  const ref = useRef(null)
  useScrollReveal(ref)

  const [showAll, setShowAll] = useState(false)

  const visiblePortfolio = showAll ? portfolio : portfolio.slice(0, 4)
  const hasMore = portfolio.length > 4

  return (
    <div ref={ref} className="section">
      <div className="content">
        <div className="block-heading margin" data-reveal>
          <img
            src="/images/subtitle.png"
            loading="lazy"
            alt=""
            width="62"
            className="image-subtitle"
          />
          <div className="subtitle">
             Events
            <br />
          </div>
          <h2 className="heading">Event design to make your heart skip a beat</h2>
        </div>

        <div className="collection-list-wrapper---portfolio w-dyn-list">
          <div role="list" className="collection-list---portfolio w-dyn-items" data-reveal-group>
            {visiblePortfolio.map((p) => (
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
                    src={p.image}
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

        {/* {hasMore && !showAll && (
          <button
            className="button w-button"
            onClick={() => setShowAll(true)}
            style={{ cursor: 'pointer', marginTop: '40px' }}
          >
            View all portfolios
          </button>
        )}

        {showAll && (
          <button
            className="button w-button"
            onClick={() => setShowAll(false)}
            style={{ cursor: 'pointer', marginTop: '40px' }}
          >
            Show less
          </button>
        )} */}
      </div>
    </div>
  )
}