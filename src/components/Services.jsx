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

  .services-cards-viewport {
    flex: 1;
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
  }

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

  .services-slide.exiting-next {
    animation: exitLeft 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 1;
  }
  .services-slide.exiting-prev {
    animation: exitRight 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 1;
  }
  .services-slide.entering-next {
    animation: enterRight 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 2;
  }
  .services-slide.entering-prev {
    animation: enterLeft 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 2;
  }

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
  .service-image-wrap:hover img { transform: scale(1.04); }

  .service-card-text {
    text-align: center;
    padding: 16px 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    overflow: hidden;
  }

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

  /* ─── Arrow base (desktop) ───────────────────────────────────────── */
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

  /* ─── Tablet landscape: 901px–1024px ────────────────────────────── */
  @media (max-width: 1024px) and (min-width: 901px) {
    .services-section-wrap {
      height: calc(100vh - 80px);
      padding: 16px !important;
    }
    .services-slider-row { gap: 14px; }
    .service-arrow-btn {
      width: 44px; height: 44px; min-width: 44px;
      background: rgba(255,255,255,0.88);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1.5px solid rgba(140,144,122,0.3);
      box-shadow: 0 3px 16px -5px rgba(84,87,72,0.2);
    }
    .service-image-wrap {
      height: calc(100vh - 80px - 140px);
      max-height: 480px;
      border-radius: 14px;
    }
    .service-card-text { padding: 14px 8px 0; gap: 6px; overflow: visible; }
    .service-card { overflow: visible; }
    .service-card-text .heading-service { font-size: 20px; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .service-card-text .paragraph-service { font-size: 13px; max-width: 100%; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .service-card-text .link { font-size: 11px; display: block; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .services-slide { gap: 16px; }
  }

  /* ─── Tablet portrait: 769px–900px ──────────────────────────────── */
  @media (max-width: 900px) and (min-width: 769px) {
    .services-section-wrap {
      height: calc(100vh - 70px);
      padding: 14px !important;
    }
    .services-slider-row { gap: 12px; }
    .service-arrow-btn {
      width: 40px; height: 40px; min-width: 40px;
      background: rgba(255,255,255,0.88);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1.5px solid rgba(140,144,122,0.3);
      box-shadow: 0 3px 14px -4px rgba(84,87,72,0.18);
    }
    .service-image-wrap {
      height: calc(100vh - 70px - 130px);
      max-height: 430px;
      border-radius: 14px;
    }
    .service-card-text { padding: 12px 8px 0; gap: 5px; overflow: visible; }
    .service-card { overflow: visible; }
    .service-card-text .heading-service { font-size: 18px; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .service-card-text .paragraph-service { font-size: 13px; max-width: 100%; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .service-card-text .link { font-size: 11px; display: block; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .services-slide { gap: 14px; }
  }

  /* ─── Small tablet / large mobile: 641px–768px ───────────────────── */
  @media (max-width: 768px) and (min-width: 641px) {
    .services-section-wrap {
      height: calc(100vh - 70px);
      padding: 12px !important;
    }
    .services-slider-row { gap: 10px; }
    .service-arrow-btn {
      width: 36px; height: 36px; min-width: 36px;
      background: rgba(255,255,255,0.88);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
      border: 1.5px solid rgba(140,144,122,0.3);
      box-shadow: 0 2px 12px -4px rgba(84,87,72,0.16);
    }
    .service-image-wrap {
      height: calc(100vh - 70px - 120px);
      max-height: 380px;
      border-radius: 12px;
    }
    .service-card-text { padding: 10px 6px 0; gap: 4px; overflow: visible; }
    .service-card { overflow: visible; }
    .service-card-text .heading-service { font-size: 16px; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .service-card-text .paragraph-service { font-size: 12px; max-width: 100%; -webkit-line-clamp: 2; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .service-card-text .link { font-size: 10px; display: block; opacity: 1 !important; transform: translate3d(0,0,0) !important; transition: none !important; }
    .services-slide { gap: 12px; }
  }

  /* ─── Mobile: 640px and below ────────────────────────────────────── */
  @media (max-width: 640px) {
    .services-section-wrap {
      height: 100svh;
      padding: 20px 0 24px !important;
      box-sizing: border-box;
    }

    .services-slider-row {
      gap: 0;
      width: 100%;
      height: 100%;
      align-items: stretch;
    }

    .service-arrow-btn {
      flex: 0 0 7%;
      width: 7%;
      height: auto;
      align-self: center;
      min-width: unset;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background: rgba(255,255,255,0.75);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(160,164,142,0.22);
      box-shadow: 0 2px 10px -3px rgba(84,87,72,0.14);
      padding: 0;
      transition: transform 180ms ease, box-shadow 180ms ease;
    }
    .service-arrow-btn:active { transform: scale(0.91); }
    .service-arrow-btn:hover {
      transform: none;
      box-shadow: 0 2px 10px -3px rgba(84,87,72,0.14);
    }

    .services-cards-viewport {
      flex: 0 0 86%;
      width: 86%;
      height: 100%;
    }

    .services-slide {
      gap: 0;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .service-card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .service-image-wrap {
      flex: 1;
      width: 100%;
      height: 0;
      max-height: none;
      border-radius: 16px;
    }

    .service-card-text {
      flex-shrink: 0;
      width: 100%;
      padding: 12px 4px 0;
      gap: 5px;
      overflow: visible;
      align-items: center;
    }

    .service-card-text .heading-service {
      font-size: 17px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    .service-card-text .paragraph-service {
      font-size: 12px;
      line-height: 1.5;
      max-width: 100%;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .service-card-text .link { font-size: 11px; display: block; }
  }

  /* ─── Small phones: 480px and below ─────────────────────────────── */
  @media (max-width: 480px) {
    .services-section-wrap { padding: 16px 0 20px !important; }
    .service-card-text { padding: 10px 4px 0; gap: 4px; }
    .service-card-text .heading-service { font-size: 15px; }
    .service-card-text .paragraph-service { font-size: 11px; }
    .service-card-text .link { font-size: 10px; }
  }

  /* ─── Very small phones: 360px and below ────────────────────────── */
  @media (max-width: 360px) {
    .services-section-wrap { padding: 12px 0 16px !important; }
    .service-card-text { padding: 8px 2px 0; gap: 3px; }
    .service-card-text .heading-service { font-size: 14px; }
    .service-card-text .paragraph-service { font-size: 10px; -webkit-line-clamp: 1; }
    .service-card-text .link { font-size: 10px; }
  }

  /* ─── Landscape phone (short screens): max-height 500px ─────────── */
  @media (max-height: 500px) and (max-width: 900px) {
    .services-section-wrap { padding: 8px 0 10px !important; height: 100svh; }
    .service-image-wrap { border-radius: 10px; }
    .service-card-text { padding: 5px 4px 0; gap: 2px; }
    .service-card-text .heading-service { font-size: 13px; transition-delay: 200ms; }
    .service-card-text .paragraph-service { font-size: 10px; -webkit-line-clamp: 1; transition-delay: 260ms; }
    .service-card-text .link { font-size: 9px; transition-delay: 280ms; }
    .service-arrow-btn { width: 32px; height: 32px; min-width: 32px; }
  }

  /* ─── Touch devices: suppress sticky hover ──────────────────────── */
  @media (hover: none) {
    .service-image-wrap:hover img { transform: none; }
    .service-arrow-btn:hover {
      box-shadow: 0 2px 10px -3px rgba(84,87,72,0.14);
      transform: none;
    }
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

            <button onClick={() => go('prev')} aria-label="Previous" className="service-arrow-btn" disabled={isAnimating}>
              <MdChevronLeft style={{ fontSize: '24px', color: 'var(--heading)' }} />
            </button>

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

            <button onClick={() => go('next')} aria-label="Next" className="service-arrow-btn" disabled={isAnimating}>
              <MdChevronRight style={{ fontSize: '24px', color: 'var(--heading)' }} />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}