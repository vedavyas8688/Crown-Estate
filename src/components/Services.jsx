import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { serviceDetails, serviceList } from '../data/services'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const style = `
  @keyframes exitLeft {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(-80px); }
  }
  @keyframes exitRight {
    from { opacity: 1; transform: translateX(0); }
    to   { opacity: 0; transform: translateX(80px); }
  }
  @keyframes enterRight {
    from { opacity: 0; transform: translateX(80px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes enterLeft {
    from { opacity: 0; transform: translateX(-80px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* ─── Section wrapper ────────────────────────────────────────────── */
  .services-section-wrap {
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 90px);
    display: flex;
    align-items: stretch;
    box-sizing: border-box;
  }

  /* ─── .content.wide inside ───────────────────────────────────────── */
  .services-section-wrap > .content.wide {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }

  .services-slider-row {
    display: flex;
    align-items: stretch;
    gap: 16px;
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  .services-cards-viewport {
    flex: 1;
    position: relative;
    overflow: hidden;
    min-height: 0;
    height: 100%;
  }

  /* ─── Arrow: vertically centred ──────────────────────────────────── */
  .service-arrow-btn-wrap {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .services-slide {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: grid;
    gap: 20px;
    align-items: stretch;
    padding: 10px 0;
    box-sizing: border-box;
  }

  .services-slide.exiting-next {
    animation: exitLeft 500ms cubic-bezier(0.4,0,0.2,1) forwards;
    z-index: 1;
  }
  .services-slide.exiting-prev {
    animation: exitRight 500ms cubic-bezier(0.4,0,0.2,1) forwards;
    z-index: 1;
  }
  .services-slide.entering-next {
    animation: enterRight 500ms cubic-bezier(0.4,0,0.2,1) forwards;
    z-index: 2;
  }
  .services-slide.entering-prev {
    animation: enterLeft 500ms cubic-bezier(0.4,0,0.2,1) forwards;
    z-index: 2;
  }

  .services-slide.entering-next .service-card:nth-child(1),
  .services-slide.entering-prev .service-card:nth-child(1) { animation-delay: 0ms; }
  .services-slide.entering-next .service-card:nth-child(2),
  .services-slide.entering-prev .service-card:nth-child(2) { animation-delay: 60ms; }
  .services-slide.entering-next .service-card:nth-child(3),
  .services-slide.entering-prev .service-card:nth-child(3) { animation-delay: 120ms; }

  /* ─── Card: flex column, fills grid cell ─────────────────────────── */
  .service-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
    opacity: 0;
    animation: inherit;
    animation-fill-mode: forwards;
  }

  /* ─── Image: flex:1 so it fills available height ─────────────────── */
  .service-image-wrap {
    flex: 1;
    min-height: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 14px;
    display: block;
    text-decoration: none;
  }
  .service-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 700ms cubic-bezier(0.22,1,0.36,1);
    will-change: transform;
  }
  .service-image-wrap:hover img { transform: scale(1.04); }

  /* ─── Text block: fixed height, never shrinks ────────────────────── */
  .service-card-text {
    flex-shrink: 0;
    text-align: center;
    padding: 14px 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
  }

  .service-card-text .heading-service {
    font-size: 20px;
    margin-bottom: 0;
    opacity: 0;
    transform: translate3d(0, 18px, 0);
    transition: opacity 500ms ease, transform 500ms cubic-bezier(0.25,0.46,0.45,0.94);
    transition-delay: 300ms;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .service-card-text .paragraph-service {
    font-size: 13px;
    line-height: 1.5;
    max-width: 300px;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 18px, 0);
    transition: opacity 500ms ease, transform 500ms cubic-bezier(0.25,0.46,0.45,0.94);
    transition-delay: 370ms;
  }
  .service-card-text .link {
    opacity: 0;
    transform: translate3d(0, 14px, 0);
    transition: opacity 450ms ease, transform 450ms cubic-bezier(0.25,0.46,0.45,0.94);
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
    transform: translate3d(0,0,0);
  }

  /* ─── Arrow base ─────────────────────────────────────────────────── */
  .service-arrow-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: white;
    border: 1px solid rgba(160,164,142,0.4);
    box-shadow: 0 4px 20px -6px rgba(84,87,72,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 300ms ease, transform 300ms ease;
    flex-shrink: 0;
  }
  .service-arrow-btn:hover {
    box-shadow: 0 8px 30px -6px rgba(84,87,72,0.3);
    transform: scale(1.06);
  }
  .service-arrow-btn:disabled { opacity: 0.4; pointer-events: none; }

  /* ─── Tablet landscape: 901px–1024px ────────────────────────────── */
  @media (max-width: 1024px) and (min-width: 901px) {
    .services-section-wrap { height: calc(100vh - 80px); padding: 14px !important; }
    .services-slider-row { gap: 12px; }
    .service-arrow-btn {
      width: 42px; height: 42px;
      background: rgba(255,255,255,0.9);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1.5px solid rgba(140,144,122,0.3);
      box-shadow: 0 3px 16px -5px rgba(84,87,72,0.2);
    }
    .services-slide { gap: 14px; padding: 8px 0; }
    .service-image-wrap { border-radius: 13px; }
    .service-card-text { padding: 12px 8px 0; gap: 5px; }
    .service-card-text .heading-service { font-size: 18px; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .paragraph-service { font-size: 12px; max-width: 100%; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .link { font-size: 11px; opacity: 1 !important; transform: none !important; transition: none !important; }
  }

  /* ─── Tablet portrait: 769px–900px ──────────────────────────────── */
  @media (max-width: 900px) and (min-width: 769px) {
    .services-section-wrap { height: calc(100vh - 70px); padding: 12px !important; }
    .services-slider-row { gap: 10px; }
    .service-arrow-btn {
      width: 38px; height: 38px;
      background: rgba(255,255,255,0.9);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1.5px solid rgba(140,144,122,0.3);
      box-shadow: 0 3px 14px -4px rgba(84,87,72,0.18);
    }
    .services-slide { gap: 12px; padding: 6px 0; }
    .service-image-wrap { border-radius: 12px; }
    .service-card-text { padding: 10px 6px 0; gap: 4px; }
    .service-card-text .heading-service { font-size: 17px; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .paragraph-service { font-size: 12px; max-width: 100%; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .link { font-size: 11px; opacity: 1 !important; transform: none !important; transition: none !important; }
  }

  /* ─── Small tablet: 641px–768px ─────────────────────────────────── */
  @media (max-width: 768px) and (min-width: 641px) {
    .services-section-wrap { height: calc(100vh - 70px); padding: 10px !important; }
    .services-slider-row { gap: 8px; }
    .service-arrow-btn {
      width: 34px; height: 34px;
      background: rgba(255,255,255,0.9);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1.5px solid rgba(140,144,122,0.3);
      box-shadow: 0 2px 12px -4px rgba(84,87,72,0.16);
    }
    .services-slide { gap: 10px; padding: 6px 0; }
    .service-image-wrap { border-radius: 12px;    }
    .service-card-text { padding: 9px 4px 0; gap: 4px; }
    .service-card-text .heading-service { font-size: 15px; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .paragraph-service { font-size: 11px; max-width: 100%; -webkit-line-clamp: 2; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .link { font-size: 10px; opacity: 1 !important; transform: none !important; transition: none !important; }
  }

  /* ─── Mobile: 640px and below ────────────────────────────────────── */
  @media (max-width: 640px) {
    .services-section-wrap {
      height: 100svh;
      padding: 20px 0 24px !important;
      box-sizing: border-box;
      align-items: stretch;
    }
    .services-slider-row { gap: 0; align-items: center; }
    .service-arrow-btn-wrap { align-items: center; }
    .service-arrow-btn {
      width: 30px; height: 30px;
      background: rgba(255,255,255,0.75);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(160,164,142,0.22);
      box-shadow: 0 2px 10px -3px rgba(84,87,72,0.14);
      transition: transform 180ms ease;
    }
    .service-arrow-btn:active { transform: scale(0.91); }
    .service-arrow-btn:hover { transform: none; }
    .services-cards-viewport { flex: 1; }
    .services-slide {
      gap: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
    }
    .service-card {
      width: 100%;
      flex: 1;
      min-height: 0;
    }
    .service-image-wrap {
      border-radius: 16px;
    }
    .service-card-text {
      padding: 12px 4px 0;
      gap: 5px;
    }
    .service-card-text .heading-service { font-size: 17px; }
    .service-card-text .paragraph-service { font-size: 12px; line-height: 1.5; max-width: 100%; }
    .service-card-text .link { font-size: 11px; }
  }

  /* ─── Small phones ───────────────────────────────────────────────── */
  @media (max-width: 480px) {
    .services-section-wrap { padding: 16px 0 20px !important; max-height: 85vh;  }
    .service-card-text { padding: 10px 4px 0; }
    .service-card-text .heading-service { font-size: 15px; }
    .service-card-text .paragraph-service { font-size: 11px; }
    .service-card-text .link { font-size: 10px; }
  }

  /* ─── Very small phones ──────────────────────────────────────────── */
  @media (max-width: 360px) {
    
    .services-section-wrap { padding: 12px 0 16px !important; }
    .service-card-text { padding: 8px 2px 0; }
    .service-card-text .heading-service { font-size: 14px; }
    .service-card-text .paragraph-service { font-size: 10px; -webkit-line-clamp: 1; }
    .service-card-text .link { font-size: 10px; }
  }

  /* ─── Landscape phone ────────────────────────────────────────────── */
  @media (max-height: 500px) and (max-width: 900px) {
    .services-section-wrap { padding: 8px 0 10px !important; height: 100svh; }
    .service-image-wrap { border-radius: 10px; }
    .service-card-text { padding: 5px 4px 0; gap: 2px; }
    .service-card-text .heading-service { font-size: 13px; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .paragraph-service { font-size: 10px; -webkit-line-clamp: 1; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-card-text .link { font-size: 9px; opacity: 1 !important; transform: none !important; transition: none !important; }
    .service-arrow-btn { width: 30px; height: 30px; }
  }

  /* ─── Touch: no sticky hover ─────────────────────────────────────── */
  @media (hover: none) {
    .service-image-wrap:hover img { transform: none; }
    .service-arrow-btn:hover { box-shadow: 0 2px 10px -3px rgba(84,87,72,0.14); transform: none; }
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

  const [current, setCurrent]         = useState(0)
  const [outgoing, setOutgoing]       = useState(null)
  const [direction, setDirection]     = useState('next')
  const [isAnimating, setIsAnimating] = useState(false)

  const total   = serviceList.length
  const visible = useVisibleCount()
  const ANIM_DURATION = 500

  const go = useCallback((dir) => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)

    const outgoingSlugs = Array.from(
      { length: visible },
      (_, i) => serviceList[(current + i) % total]
    )
    setOutgoing(outgoingSlugs)

    setCurrent(c =>
      dir === 'next'
        ? (c + 1) % total
        : (c - 1 + total) % total
    )

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

            <div className="service-arrow-btn-wrap">
              <button onClick={() => go('prev')} aria-label="Previous" className="service-arrow-btn" disabled={isAnimating}>
                <MdChevronLeft style={{ fontSize: '22px', color: 'var(--heading)' }} />
              </button>
            </div>

            <div className="services-cards-viewport">
              {outgoing && (
                <div
                  className={`services-slide ${direction === 'next' ? 'exiting-next' : 'exiting-prev'}`}
                  style={{ gridTemplateColumns: gridCols }}
                >
                  {renderCards(outgoing)}
                </div>
              )}
              <div
                key={current}
                className={`services-slide ${direction === 'next' ? 'entering-next' : 'entering-prev'}`}
                style={{ gridTemplateColumns: gridCols }}
              >
                {renderCards(getVisible())}
              </div>
            </div>

            <div className="service-arrow-btn-wrap">
              <button onClick={() => go('next')} aria-label="Next" className="service-arrow-btn" disabled={isAnimating}>
                <MdChevronRight style={{ fontSize: '22px', color: 'var(--heading)' }} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}