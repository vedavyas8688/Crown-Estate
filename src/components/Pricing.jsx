import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Pricing({ packages, eyebrow = 'Investment', heading = 'OUR OFFERINGS' }) {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div className="section section-pricing" ref={ref}>
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
            {eyebrow}<br />
          </div>
          <h2 className="heading" data-reveal>{heading}</h2>
        </div>

        <div className="grid-pricing section-pricing1" data-reveal-group>
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`pricing-card${pkg.featured ? ' featured' : ''}`}
              data-reveal-child
            >
              <div className="pricing-eyebrow">{pkg.eyebrow}</div>
              <h3 className="pricing-name">{pkg.name}</h3>
              <p className="pricing-description">{pkg.description}</p>
              <div className="pricing-price">{pkg.price}</div>
              <ul className="pricing-features">
                {pkg.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="button w-button">
                Book consultation
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
