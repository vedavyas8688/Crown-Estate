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
`

export default function Services() {
  const ref = useRef(null)
  useScrollReveal(ref)
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('next')
  const total = serviceList.length
  const visible = 3

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

  return (
    <>
      <style>{style}</style>
      <div ref={ref} className="section">
        <div className="content wide" style={{ paddingLeft: '20px', paddingRight: '20px' }}>

          <div className="flex items-center gap-3">

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <MdChevronLeft className="text-2xl" style={{ color: 'var(--heading)' }} />
            </button>

            {/* Cards */}
            <div
              className="flex-1 grid grid-cols-3 gap-5"
              key={current}
              style={{
                animation: `${direction === 'next' ? 'fadeSlide' : 'fadeSlideReverse'} 0.5s cubic-bezier(.25,.46,.45,.94) both`,
              }}
            >
              {getVisible().map((slug) => {
                const s = serviceDetails[slug]
                const href = `/services/${slug}`
                return (
                  <div className="flex flex-col items-center" key={slug}>

                    <Link
                      to={href}
                      className="w-full block rounded-2xl overflow-hidden"
                      style={{ aspectRatio: '1 / 1' }}
                    >
                      <img
                        src={s.teaserImage}
                        alt={s.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>

                    <div className="block-service mt-6">
                      <Link to={href} className="link-service w-inline-block">
                        <h4 className="heading-service">{s.title}</h4>
                      </Link>
                      <p className="paragraph-service line-clamp-2 overflow-hidden">{s.teaserBody}</p>
                      <Link to={href} className="link">learn more</Link>
                    </div>

                  </div>
                )
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
            >
              <MdChevronRight className="text-2xl" style={{ color: 'var(--heading)' }} />
            </button>

          </div>

        </div>
      </div>
    </>
  )
}