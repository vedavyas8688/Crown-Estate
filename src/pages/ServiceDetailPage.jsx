import { useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { serviceDetails } from '../data/services'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import RelatedServices from '../components/RelatedServices'
import Seo from '../components/Seo'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const ref = useRef(null)
  useScrollReveal(ref)

  const data = serviceDetails[slug]

  if (!data) return <Navigate to="/services" replace />

  return (
    <div ref={ref}>

      {/* ============ SEO ============ */}
      <Seo
        title={data.seo?.metaTitle}
        description={data.seo?.metaDescription}
        keywords={data.seo?.keywords}
      />

      {/* ============ 1. HERO ============ */}
      <div className="section-hero page">
        <div className="content">
          <div className="hero-top">
            <div className="border-top" data-hero-reveal></div>
            <img
              src="/images/subtitle.png"
              loading="lazy"
              alt=""
              width="62"
              className="image-subtitle"
              data-hero-reveal
            />
            <div className="subtitle" data-hero-reveal>
              {data.eyebrow}<br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>{data.heroHeading}</h1>
            <p className="paragraph margin" data-hero-reveal>{data.heroParagraph}</p>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div>

      {/* ============ 2. INTRO ============ */}
      <div className="section first">
        <div className="content narrow" style={{ alignItems: 'center', textAlign: 'center' }}>
          <img src={data.intro.icon} loading="lazy" alt="" width="69" className="icon-flower" data-reveal />
          <h2 className="heading" data-reveal>{data.intro.heading}</h2>
          <p className="paragraph margin" data-reveal>{data.intro.body}</p>
        </div>
      </div>

      {/* ============ 3. INCLUSIONS ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <img src={data.inclusions.icon} loading="lazy" width="69" alt="" className="icon-flower" />
              <h3 className="heading">{data.inclusions.heading}</h3>
              <p className="paragraph">{data.inclusions.body}</p>
              <ul className="inclusion-list">
                {data.inclusions.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="block-image" data-reveal data-reveal-delay="0.15">
              <div className="overflow-image">
                <img src={data.inclusions.image} loading="lazy" alt="" className="image" />
              </div>
              {data.inclusions.flower && (
                <img
                  src={data.inclusions.flower}
                  loading="eager"
                  alt=""
                  className={data.inclusions.flowerClass || 'flower---a'}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============ 4. PROCESS ============ */}
      <Process steps={data.process} />

      {/* ============ 5. GALLERY ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-3-columns" data-reveal-group>
            {data.gallery.slice(0, 3).map((src) => (
              <div key={src} className="overflow-image" data-reveal-child>
                <img src={src} loading="lazy" alt="" className="image about" />
              </div>
            ))}
          </div>
          {data.gallery.length > 3 && (
            <div className="w-layout-grid grid-3-columns" style={{ marginTop: '20px' }} data-reveal-group>
              {data.gallery.slice(3, 6).map((src) => (
                <div key={src} className="overflow-image" data-reveal-child>
                  <img src={src} loading="lazy" alt="" className="image about" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ============ 6. FEATURED TESTIMONIAL ============ */}
      <div className="section">
        <div className="content">
          <div className="featured-testimonial" data-reveal>
            <img src={data.testimonial.flower} alt="" loading="lazy" />
            <p className="quote">{data.testimonial.quote}</p>
            <div className="author">{data.testimonial.author}</div>
          </div>
        </div>
      </div>

      {/* ============ 7. PRICING ============ */}
      <Pricing packages={data.packages} />

      {/* ============ 8. FAQ ============ */}
      <FAQ items={data.faq} />

      {/* ============ 9. CTA ============ */}
      <CTA data={data.cta} />

      {/* ============ 10. RELATED SERVICES ============ */}
      <RelatedServices currentSlug={data.slug} />
    </div>
  )
}