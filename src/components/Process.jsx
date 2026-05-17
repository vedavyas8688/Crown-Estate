import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Process({ steps, eyebrow = 'Our Process', heading = 'How we work together' }) {
  const ref = useRef(null)
  useScrollReveal(ref)

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
            {eyebrow}<br />
          </div>
          <h2 className="heading" data-reveal>{heading}</h2>
        </div>

        <div className="grid-process" data-reveal-group>
          {steps.map((step, i) => (
            <div key={i} className="process-step" data-reveal-child>
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="paragraph">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
