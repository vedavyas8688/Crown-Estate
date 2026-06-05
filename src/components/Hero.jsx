import { useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { heroImages } from "../data/content";
import BookingModal from "./BookingModal";

export default function Hero() {
  const ref = useRef(null);
  useScrollReveal(ref);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div ref={ref}>
        <div className="section-hero" style={{ paddingBottom: "200px" }}>
          <div className="content wide">
            <div className="hero---a" style={{ marginBottom: 0 }}>

              {/* Images */}
              <div
                className="w-layout-grid grid-hero---a grid-hero-responsive"
                style={{ gridTemplateColumns: "1fr 1fr" }}
              >
                {heroImages.slice(0, 2).map((src, i) => (
                  <div
                    className="overflow-hero---a"
                    key={src}
                    style={{ borderRadius: "16px", overflow: "hidden" }}
                  >
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

              {/* Card */}
              <div className="block-hero---a" style={{ bottom: "-260px" }}>
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

                  <button
                    className="link"
                    style={{
                      marginTop: "-10px",
                      background: "none",
                      border: "none",
                      borderBottom: "2px solid var(--accent)",
                      cursor: "pointer",
                      padding: "10px 0",
                      display: "inline-block",
                      fontSize: "15px",
                      fontWeight: "300",
                    }}
                    onClick={() => setModalOpen(true)}
                  >
                    Book A Event
                  </button>
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

      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
    </>
  );
}