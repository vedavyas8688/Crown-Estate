import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import { useScrollReveal } from '../hooks/useScrollReveal'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} className="section  ">
      <div className="content testinomial-responsiveness">
        <div className="block-heading margin" data-reveal>
          <img
            src="/images/subtitle.png"
            loading="lazy"
            alt=""
            width="62"
            className="image-subtitle"
          />
          <div className="subtitle">
            Testimonials
            <br />
          </div>
          <h2 className="heading">What our guests say</h2>
        </div>

        <div className="slider-testimonials w-slider testinomial-responsiveness1" data-reveal>
          <Swiper
            modules={[Navigation, EffectFade, A11y]}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next'
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={600}
            loop
            allowTouchMove={true}
            className="swiper-testimonials mask w-slider-mask"
            a11y={{
              prevSlideMessage: 'Previous testimonial',
              nextSlideMessage: 'Next testimonial'
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="slide w-slide">
                <div className="testimonial">
                  <img
                    src={t.flower}
                    loading="lazy"
                    alt=""
                    className="image-testimonial"
                  />
                  <p className="paragraph-testimonial">{t.quote}</p>
                  <div className="signature-testimonial">{t.author}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-prev left-arrow w-slider-arrow-left" role="button" aria-label="Previous slide">
            <img src="/images/left-arrow.png" loading="lazy" width="23" alt="" className="arrow" />
          </div>
          <div className="testimonial-next right-arrow w-slider-arrow-right" role="button" aria-label="Next slide">
            <img src="/images/right-arrow.png" loading="lazy" width="23" alt="" className="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}
