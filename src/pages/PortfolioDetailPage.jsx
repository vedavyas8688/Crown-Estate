import { useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { portfolioDetails } from '../data/portfolio'
import Galleries from '../components/Galleries'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import RelatedPortfolio from '../components/RelatedPortfolio'

/**
 * Portfolio detail page
 * Sections:
 *   1. Hero
 *   2. Gallery
 *   3. Featured Testimonial
 *   4. Pricing
 *   5. FAQ
 *   6. CTA
 *   7. Related Portfolio
 */
export default function PortfolioDetailPage() {
  const { slug } = useParams()
  const ref = useRef(null)
  useScrollReveal(ref)

  const data = portfolioDetails[slug]

  if (!data) return <Navigate to="/portfolio" replace />

  return (
    <div ref={ref}>

      {/* ============ 1. HERO ============ */}
      {/* <div className="section-hero page">
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
            <h1 className="heading-hero" data-hero-reveal>
              {data.heroHeading}
            </h1>
            <p className="paragraph margin" data-hero-reveal>
              {data.heroParagraph}
            </p>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div> */}

      {/* ============ 2. GALLERY ============ */}
      <Galleries
        images={data.gallery}
        subtitle="Gallery"
        heading={data.title}
        body={data.intro.body}
      />

      {/* ============ 3. FEATURED TESTIMONIAL ============ */}
      <div className="section">
        <div className="content">
          <div className="featured-testimonial" data-reveal>
            <img src={data.testimonial.flower} alt="" loading="lazy" />
            <p className="quote">{data.testimonial.quote}</p>
            <div className="author">{data.testimonial.author}</div>
          </div>
        </div>
      </div>

      

       
      {/* ============ 7. RELATED PORTFOLIO ============ */}
      <RelatedPortfolio currentSlug={data.slug} />

    </div>
  )
}