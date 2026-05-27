import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { serviceDetails, serviceList } from '../data/services'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const style = `
  /* OUTGOING — exits to the left or right */
  @keyframes exitLeft {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(-80px); }
  }
  @keyframes exitRight {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(80px); }
  }
  /* INCOMING — enters from right or left */
  @keyframes enterRight {
    from { opacity: 0; transform: translateX(80px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes enterLeft {
    from { opacity: 0; transform: translateX(-80px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .services-section-wrap {
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 90px);
    display: flex;
    align-items: center;
  }

  .services-slider-row {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 100%;
  }

  /* Viewport stacks outgoing + incoming on top of each other */
  .services-cards-viewport {
    flex: 1;
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
  }

  /* Both slides are absolutely positioned so they overlap during transition */
  .services-slide {
    position: absolute;
    width: 100%;
    display: grid;
    gap: 20px;
    top: 0;
    left: 0;
    height: 100%;
    align-items: start;
    padding-top: 10px;
  }

  /* OUTGOING slide */
  .services-slide.exiting-next {
    animation: exitLeft 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 1;
  }
  .services-slide.exiting-prev {
    animation: exitRight 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 1;
  }

  /* INCOMING slide */
  .services-slide.entering-next {
    animation: enterRight 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 2;
  }
  .services-slide.entering-prev {
    animation: enterLeft 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 2;
  }

  /* Stagger each card inside the incoming slide */
  .services-slide.entering-next .service-card:nth-child(1),
  .services-slide.entering-prev .service-card:nth-child(1) { animation-delay: 0ms; }
  .services-slide.entering-next .service-card:nth-child(2),
  .services-slide.entering-prev .service-card:nth-child(2) { animation-delay: 60ms; }
  .services-slide.entering-next .service-card:nth-child(3),
  .services-slide.entering-prev .service-card:nth-child(3) { animation-delay: 120ms; }

  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: inherit;
    animation-fill-mode: forwards;
  }

  .service-image-wrap {
    width: 100%;
    overflow: hidden;
    border-radius: 14px;
    display: block;
    text-decoration: none;
    height: calc(100vh - 90px - 140px);
    max-height: 520px;
  }
  .service-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: transform;
  }
  .service-image-wrap:hover img {
    transform: scale(1.04);
  }

  .service-card-text {
    text-align: center;
    padding: 16px 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    overflow: hidden;
  }

  /* Text slides up after card enters */
  .service-card-text .heading-service {
    font-size: 22px;
    margin-bottom: 0;
    opacity: 0;
    transform: translate3d(0, 18px, 0);
    transition: opacity 500ms ease, transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-delay: 300ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .service-card-text .paragraph-service {
    font-size: 14px;
    line-height: 1.55;
    max-width: 280px;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 18px, 0);
    transition: opacity 500ms ease, transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-delay: 370ms;
  }
  .service-card-text .link {
    opacity: 0;
    transform: translate3d(0, 14px, 0);
    transition: opacity 450ms ease, transform 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-delay: 440ms;
    font-size: 11px;
  }

  .services-slide.entering-next .service-card-text .heading-service,
  .services-slide.entering-next .service-card-text .paragraph-service,
  .services-slide.entering-next .service-card-text .link,
  .services-slide.entering-prev .service-card-text .heading-service,
  .services-slide.entering-prev .service-card-text .paragraph-service,
  .services-slide.entering-prev .service-card-text .link {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .service-arrow-btn {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    min-width: 48px;
    border-radius: 50%;
    background: white;
    border: 1px solid rgba(160,164,142,0.4);
    box-shadow: 0 4px 20px -6px rgba(84,87,72,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 300ms ease, transform 300ms ease;
    z-index: 10;
  }
  .service-arrow-btn:hover {
    box-shadow: 0 8px 30px -6px rgba(84,87,72,0.3);
    transform: scale(1.06);
  }
  .service-arrow-btn:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    .service-arrow-btn { width: 40px; height: 40px; min-width: 40px; }
    .service-card-text .heading-service { font-size: 20px; }
    .service-card-text .paragraph-service { font-size: 13px; }
    .services-slide { gap: 16px; }
    .service-image-wrap { max-height: 400px; }
  }

  @media (max-width: 640px) {
    .services-section-wrap { height: calc(100vh - 70px); }
    .services-slider-row { gap: 0; }
    .service-arrow-btn {
      width: 7.5vw; height: 7.5vw; min-width: 7.5vw;
      background: transparent; border: none; box-shadow: none;
    }
    .service-arrow-btn:hover { transform: none; box-shadow: none; }
    .services-cards-viewport { width: 85vw; flex: none; }
    .service-image-wrap {
      border-radius: 12px;
      height: calc(100vh - 70px - 120px);
      max-height: none;
    }
    .service-card-text { padding-top: 14px; gap: 5px; }
    .service-card-text .heading-service { font-size: 18px; }
    .service-card-text .paragraph-service { font-size: 12px; }
    .services-slide { gap: 0; }
  }
`

function useVisibleCount() {
  const [count, setCount] = useState(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  })

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1)
      else if (window.innerWidth < 1024) setCount(2)
      else setCount(3)
    }
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

export default function Services() {
  const ref = useRef(null)
  useScrollReveal(ref)

  const [current, setCurrent]       = useState(0)
  const [outgoing, setOutgoing]     = useState(null)  // ← tracks the slide being removed
  const [direction, setDirection]   = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)

  const total   = serviceList.length
  const visible = useVisibleCount()
  const ANIM_DURATION = 500

  const go = useCallback((dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)

    // snapshot current visible slugs as the outgoing slide
    const outgoingSlugs = Array.from(
      { length: visible },
      (_, i) => serviceList[(current + i) % total]
    )
    setOutgoing(outgoingSlugs)

    // advance current
    setCurrent(c =>
      dir === 'next'
        ? (c + 1) % total
        : (c - 1 + total) % total
    )

    // clear outgoing after animation finishes
    setTimeout(() => {
      setOutgoing(null)
      setIsAnimating(false)
    }, ANIM_DURATION)
  }, [isAnimating, current, total, visible])

  useEffect(() => {
    const timer = setInterval(() => go('next'), 3500)
    return () => clearInterval(timer)
  }, [go])

  const getVisible = () =>
    Array.from({ length: visible }, (_, i) => serviceList[(current + i) % total])

  const gridCols =
    visible === 1 ? '1fr' : visible === 2 ? '1fr 1fr' : '1fr 1fr 1fr'

  const renderCards = (slugs) =>
    slugs.map((slug) => {
      const s    = serviceDetails[slug]
      const href = `/services/${slug}`
      return (
        <div className="service-card" key={slug}>
          <Link to={href} className="service-image-wrap">
            <img src={s.teaserImage} alt={s.title} loading="lazy" />
          </Link>
          <div className="service-card-text">
            <Link to={href} className="link-service w-inline-block">
              <h4 className="heading-service">{s.title}</h4>
            </Link>
            <p className="paragraph-service">{s.teaserBody}</p>
            <Link to={href} className="link">learn more</Link>
          </div>
        </div>
      )
    })

  return (
    <>
      <style>{style}</style>
      <div ref={ref} className="section services-section-wrap" style={{ padding: '20px' }}>
        <div className="content wide" style={{ height: '100%', paddingLeft: '0', paddingRight: '0' }}>
          <div className="services-slider-row">

            <button onClick={() => go('prev')} aria-label="Previous" className="service-arrow-btn" disabled={isAnimating}>
              <MdChevronLeft style={{ fontSize: '24px', color: 'var(--heading)' }} />
            </button>

            <div className="services-cards-viewport">

              {/* OUTGOING slide — exits */}
              {outgoing && (
                <div
                  className={`services-slide ${direction === 'next' ? 'exiting-next' : 'exiting-prev'}`}
                  style={{ gridTemplateColumns: gridCols }}
                >
                  {renderCards(outgoing)}
                </div>
              )}

              {/* INCOMING slide — enters */}
              <div
                key={current}
                className={`services-slide ${direction === 'next' ? 'entering-next' : 'entering-prev'}`}
                style={{ gridTemplateColumns: gridCols }}
              >
                {renderCards(getVisible())}
              </div>

            </div>

            <button onClick={() => go('next')} aria-label="Next" className="service-arrow-btn" disabled={isAnimating}>
              <MdChevronRight style={{ fontSize: '24px', color: 'var(--heading)' }} />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}