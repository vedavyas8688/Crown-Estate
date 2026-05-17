import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { portfolio } from '../data/content'

export default function Portfolio() {
  const ref = useRef(null)
  useScrollReveal(ref)

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
            Portfolio
            <br />
          </div>
          <h2 className="heading">Event design to make your heart skip a beat</h2>
        </div>

        <div className="collection-list-wrapper---portfolio w-dyn-list">
          <div role="list" className="collection-list---portfolio w-dyn-items" data-reveal-group>
            {portfolio.map((p) => (
              <div
                role="listitem"
                className="collection-item---portfolio w-dyn-item"
                key={p.slug}
                data-reveal-child
              >
                <a
                  href={`/portfolio/${p.slug}`}
                  className="overflow-portfolio w-inline-block"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    loading="lazy"
                    src={p.image}
                    alt={p.title}
                    className="image-portfolio"
                  />
                </a>
                <div className="block-portfolio">
                  <a
                    href={`/portfolio/${p.slug}`}
                    className="link-portfolio w-inline-block"
                    onClick={(e) => e.preventDefault()}
                  >
                    <h5 className="heading-portfolio">{p.title}</h5>
                  </a>
                  <a
                    href={`/portfolio/${p.slug}`}
                    className="link"
                    onClick={(e) => e.preventDefault()}
                  >
                    learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <a
          href="/portfolio"
          className="button w-button"
          onClick={(e) => e.preventDefault()}
        >
          View all portfolios
        </a>
      </div>
    </div>
  )
}
