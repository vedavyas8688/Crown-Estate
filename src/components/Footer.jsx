import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { instagramImages } from '../data/content'

export default function Footer() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <div ref={ref} className="section-footer">
      <div className="content">
        <div className="border-footer"></div>
        <div className="block-heading" data-reveal>
          <h3 className="heading">Moments</h3>
        </div>
        <div className="w-layout-grid grid-instagram" data-reveal-group>
          {instagramImages.map((src, i) => (
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
              className={`overflow-instagram ${i % 2 === 0 ? 'margin' : ''} w-inline-block`}
              key={src}
              data-reveal-child
            >
              <img src={src} loading="lazy" alt="" className="image-instagram" />
            </a>
          ))}
        </div>
        <div className="w-layout-grid grid-footer">
          <div className="block-footer">
            <h5 className="heading-footer">Social</h5>
            <a
              href="https://www.instagram.com/crownestatebengaluru/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-footer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/crownestatebengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="link-footer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@crownestatebengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="link-footer"
            >
              Youtube
            </a>
          </div>
          <div className="block-footer border">
            <h5 className="heading-footer">Quick Links</h5>
            <a
              href="/about"
              className="link-footer"
              onClick={(e) => e.preventDefault()}
            >
              About
            </a>
            <a
              href="/services"
              className="link-footer"
              onClick={(e) => e.preventDefault()}
            >
              Services
            </a>
            <a
              href="/contact"
              className="link-footer"
              onClick={(e) => e.preventDefault()}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="block-footer">
          <img src="/CE-logo.png" loading="lazy" alt="Lovio" className="logo-footer" />
          <a
            href="/"
            rel="noopener noreferrer"
            className="link-footer"
          >
            © 2026. All rights reserved by Crown Estate
          </a>
          <a
            href="https://hirolainfotech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-footer"
          >
            Developed & Designed By Hirola InfoTech Solutions Pvt Ltd.
          </a>
        </div>
      </div>
    </div>
  )
}
