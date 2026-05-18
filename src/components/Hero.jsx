import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { heroImages } from '../data/content'

export default function Hero() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} className="overflow">
      <div className="section-hero">
        <div className="content wide">
          <div className="hero---a">
            <div className="w-layout-grid grid-hero---a">
              {heroImages.map((src, i) => (
                <div className="overflow-hero---a" key={src}>
                  <img
                    className="image-hero---a"
                    src={src}
                    alt=""
                    loading={i === 0 ? 'eager' : 'lazy'}
                    data-hero-reveal
                    style={{ opacity: 0 }}
                  />
                </div>
              ))}
            </div>

            <div className="block-hero---a">
              <div className="text-hero---a">
                <img
                  src="/images/subtitle.png"
                  loading="lazy"
                  alt=""
                  width="62"
                  className="image-subtitle"
                  data-hero-reveal
                  style={{ opacity: 0 }}
                />
                <div className="subtitle">
                  CROWN ESTATE
                  <br />
                </div>
                <h1 className="heading-hero">
                  Luxury Events
                  <br />& Celebrations
                </h1>
                <a
                  href="/contact"
                  className="link"
                  // onClick={(e) => e.preventDefault()}
                >
                  Book A Consult
                </a>
              </div>
              <img
                src="/images/flower_1.png"
                loading="eager"
                alt=""
                className="flower-hero---a"
                data-hero-reveal
                style={{ opacity: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
