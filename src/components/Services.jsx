import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { serviceDetails, serviceList } from '../data/services'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const style = `
  @keyframes fadeSlide {
    from { opacity: 0; transform: translateX(30px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideReverse {
    from { opacity: 0; transform: translateX(-30px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  .service-image-wrap {
    width: 100%;
    overflow: hidden;
    border-radius: 16px;
    aspect-ratio: 3 / 4;
  }

  .service-image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .service-image-wrap:hover img {
    transform: scale(1.05);
  }

  .service-arrow-btn {
    flex-shrink: 0;
    width: 52px;
    height: 52px;
    min-width: 52px;
    border-radius: 50%;
    background: white;
    border: 1px solid rgba(160,164,142,0.4);
    box-shadow: 0 4px 20px -6px rgba(84,87,72,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 300ms ease, transform 300ms ease;
  }
  .service-arrow-btn:hover {
    box-shadow: 0 8px 30px -6px rgba(84,87,72,0.3);
    transform: scale(1.06);
  }

  .service-card-text {
    text-align: center;
    padding: 28px 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .service-card-text .heading-service {
    font-size: 28px;
    margin-bottom: 0;
  }
  .service-card-text .paragraph-service {
    font-size: 16px;
    line-height: 1.7;
    max-width: 320px;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .service-arrow-btn {
      width: 44px;
      height: 44px;
      min-width: 44px;
    }
    .service-card-text .heading-service { font-size: 24px; }
    .service-card-text .paragraph-service { font-size: 15px; }
  }

  /* Mobile */
  @media (max-width: 640px) {
    .service-image-wrap {
      aspect-ratio: 4 / 5;
      border-radius: 12px;
    }
    .service-arrow-btn {
      width: 38px;
      height: 38px;
      min-width: 38px;
    }
    .service-card-text {
      padding-top: 20px;
      gap: 8px;
    }
    .service-card-text .heading-service { font-size: 22px; }
    .service-card-text .paragraph-service { font-size: 14px; }
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
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('next')
  const total = serviceList.length
  const visible = useVisibleCount()

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next')
      setCurrent((c) => (c + 1) % total)
    }, 3000)
    return () => clearInterval(timer)
  }, [total])

  const prev = () => {
    setDirection('prev')
    setCurrent((c) => (c - 1 + total) % total)
  }

  const next = () => {
    setDirection('next')
    setCurrent((c) => (c + 1) % total)
  }

  const getVisible = () =>
    Array.from({ length: visible }, (_, i) => serviceList[(current + i) % total])

  const gridCols =
    visible === 1 ? '1fr' : visible === 2 ? '1fr 1fr' : '1fr 1fr 1fr'

  return (
    <>
      <style>{style}</style>
      <div ref={ref} className="section">
        <div
          className="content wide"
          style={{ paddingLeft: '20px', paddingRight: '20px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

            {/* Left Arrow */}
            <button
              onClick={prev}
              aria-label="Previous service"
              className="service-arrow-btn"
            >
              <MdChevronLeft style={{ fontSize: '26px', color: 'var(--heading)' }} />
            </button>

            {/* Cards */}
            <div
              key={`${current}-${visible}`}
              style={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: gridCols,
                gap: '28px',
                animation: `${direction === 'next' ? 'fadeSlide' : 'fadeSlideReverse'} 0.5s cubic-bezier(.25,.46,.45,.94) both`,
              }}
            >
              {getVisible().map((slug) => {
                const s = serviceDetails[slug]
                const href = `/services/${slug}`
                return (
                  <div
                    key={slug}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                  >
                    <Link to={href} className="service-image-wrap w-full block">
                      <img
                        src={s.teaserImage}
                        alt={s.title}
                        loading="lazy"
                      />
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
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              aria-label="Next service"
              className="service-arrow-btn"
            >
              <MdChevronRight style={{ fontSize: '26px', color: 'var(--heading)' }} />
            </button>

          </div>
        </div>
      </div>
    </>
  )
}