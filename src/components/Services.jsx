import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { serviceDetails, serviceList } from '../data/services'

export default function Services() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} className="section">
      <div className="content">
        <div className="w-layout-grid grid-3-columns" data-reveal-group>
          {serviceList.map((slug) => {
            const s = serviceDetails[slug]
            const href = `/services/${slug}`
            return (
              <div className="service" key={slug} data-reveal-child>
                <Link to={href} className="overflow-service w-inline-block">
                  <img
                    className="image-service"
                    src={s.teaserImage}
                    alt={s.title}
                    loading="lazy"
                  />
                </Link>
                <div className="block-service">
                  <Link to={href} className="link-service w-inline-block">
                    <h4 className="heading-service">{s.title}</h4>
                  </Link>
                  <p className="paragraph-service">{s.teaserBody}</p>
                  <Link to={href} className="link">
                    learn more
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
