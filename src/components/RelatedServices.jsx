import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { serviceDetails, serviceList } from '../data/services'

/**
 * Renders cards for every service OTHER than the current one.
 * Used at the bottom of each /services/:slug detail page.
 */
export default function RelatedServices({ currentSlug }) {
  const ref = useRef(null)
  useScrollReveal(ref)

  const others = serviceList
    .filter((slug) => slug !== currentSlug)
    .map((slug) => serviceDetails[slug])

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
          <h2 className="heading" data-reveal>More from the studio</h2>
        </div>

        <div className="grid-related" data-reveal-group>
          {others.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="related-card"
              data-reveal-child
            >
              <div className="overflow-image">
                <img src={s.teaserImage} alt={s.title} className="image" loading="lazy" />
              </div>
              <div className="related-content">
                <div className="subtitle">View service →</div>
                <h3>{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
