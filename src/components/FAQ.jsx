import { useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true"></span>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ({ items, eyebrow = 'FAQ', heading = 'Frequently asked' }) {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div className="section" ref={ref}>
      <div className="content narrow" style={{ alignItems: 'center', textAlign: 'center' }}>
        <div className="block-heading margin">
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

        <div className="faq-list" style={{ textAlign: 'left' }} data-reveal>
          {items.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </div>
  )
}
