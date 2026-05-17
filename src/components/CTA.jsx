import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTA({ data }) {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div className="section section-cta" ref={ref}>
      <div className="content">
        <div className="grid-cta">
          <div className="cta-image-wrap" data-reveal>
            <div className="overflow-image">
              <img src={data.image} alt="" className="cta-image" loading="lazy" />
            </div>
            {data.flower && (
              <img src={data.flower} alt="" className="cta-flower" loading="lazy" />
            )}
          </div>
          <div className="cta-text" data-reveal data-reveal-delay="0.15">
            <div className="cta-script">{data.script}</div>
            <h2>{data.heading}</h2>
            <p className="paragraph">{data.body}</p>
            <Link to="/contact" className="button w-button">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
