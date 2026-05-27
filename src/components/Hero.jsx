import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { heroImages } from "../data/content";

export default function Hero() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="overflow">
      <div className="section-hero">
        <div className="content wide">
          <div className="hero---a">

            {/* Images */}
            <div
              className="w-layout-grid grid-hero---a"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              {heroImages.slice(0, 2).map((src, i) => (
                <div className="overflow-hero---a" key={src}>
                  <img
                    className="image-hero---a"
                    src={src}
                    alt=""
                    loading={i === 0 ? "eager" : "lazy"}
                    data-hero-reveal
                    style={{ opacity: 0 }}
                  />
                </div>
              ))}
            </div>

            {/* Card — no inline width/maxWidth so CSS breakpoints take full control */}
            <div className="block-hero---a">
              <div
                className="text-hero---a"
                style={{ borderRadius: "16px", padding: "20px 8%" }}
              >
                <img
                  src="/images/subtitle.png"
                  loading="lazy"
                  alt=""
                  width="62"
                  className="image-subtitle"
                  data-hero-reveal
                  style={{ opacity: 0 }}
                />
                <div className="subtitle">CROWN ESTATE</div>
                <h1
                  className="heading-hero hero-heading-responsive"
                  data-hero-reveal
                  style={{ opacity: 0 }}
                >
                  Luxury Events & Celebrations
                </h1>
                <p className="paragraph">
                  From intimate gatherings to grand celebrations, we craft
                  unforgettable experiences tailored to your vision — where
                  every detail is a statement of elegance.
                </p>
                <a
                  href="/contact"
                  className="link"
                  style={{ marginTop: "-10px" }}
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
  );
}