import { useRef, useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { galleryRows } from "../data/content";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";

const lightboxStyle = `
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: lbFadeIn 200ms ease forwards;
  }
  @keyframes lbFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .lightbox-img-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90vw;
    max-height: 90vh;
  }
  .lightbox-img-wrap img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 24px 80px rgba(0,0,0,0.6);
    animation: lbImgIn 250ms cubic-bezier(0.25,0.46,0.45,0.94) forwards;
  }
  @keyframes lbImgIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }

  .lightbox-close {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 200ms ease;
    z-index: 10001;
  }
  .lightbox-close:hover { background: rgba(255,255,255,0.22); }

  .lightbox-arrow {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 200ms ease, transform 200ms ease;
    z-index: 10001;
  }
  .lightbox-arrow:hover {
    background: rgba(255,255,255,0.24);
    transform: translateY(-50%) scale(1.06);
  }
  .lightbox-arrow.prev { left: 20px; }
  .lightbox-arrow.next { right: 20px; }

  .lightbox-counter {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255,255,255,0.6);
    font-size: 13px;
    letter-spacing: 0.05em;
    z-index: 10001;
  }

  @media (max-width: 640px) {
    .lightbox-arrow { width: 40px; height: 40px; }
    .lightbox-arrow.prev { left: 10px; }
    .lightbox-arrow.next { right: 10px; }
    .lightbox-close { top: 12px; right: 12px; width: 38px; height: 38px; }
  }
`;

export default function Galleries({
  images,
  subtitle = "Galleries",
  heading = "Your grand moments made real",
  body = "Explore a venue designed for picture-perfect celebrations, elegant gatherings, luxury stays, and memorable experiences. From open-air lawns to comfortable rooms and event-ready spaces, Crown Estate gives every celebration a beautiful backdrop.",
}) {
  const ref = useRef(null);
  useScrollReveal(ref);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Flatten all images into a single array for lightbox navigation
  const rows = images
    ? images.reduce((acc, src, i) => {
        const rowIndex = Math.floor(i / 2);
        if (!acc[rowIndex])
          acc[rowIndex] = { images: [], margin: rowIndex % 2 !== 0 };
        acc[rowIndex].images.push(src);
        return acc;
      }, [])
    : galleryRows;

  const allImages = rows.flatMap((row) => row.images);

  const openLightbox = (src) => {
    const idx = allImages.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % allImages.length);
  }, [allImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      <style>{lightboxStyle}</style>

      <div ref={ref} className="section">
        <div className="content wide">
          <div className="block-heading" data-reveal>
            <img
              src="/images/subtitle.png"
              loading="lazy"
              alt=""
              width="62"
              className="image-subtitle"
            />
            <div className="subtitle">
              {subtitle}
              <br />
            </div>
            <h2 className="heading">{heading}</h2>
            <p className="paragraph">{body}</p>
          </div>

          <div className="w-layout-grid grid-galleries" data-reveal-group>
            {rows.map((row, idx) => (
              <div
                className={`w-layout-grid grid-galleries---row ${row.margin ? "margin" : ""}`}
                key={idx}
              >
                {row.images.map((src, imgIdx) => (
                  <a
                    href="#"
                    className="lightbox-link w-inline-block"
                    key={imgIdx}
                    onClick={(e) => {
                      e.preventDefault();
                      openLightbox(src);
                    }}
                    data-reveal-child
                    style={{ borderRadius: "16px", cursor: "zoom-in" }}
                  >
                    <img
                      className="image-lightbox"
                      src={src}
                      alt=""
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          {/* Close */}
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <MdClose size={22} />
          </button>

          {/* Prev */}
          <button
            className="lightbox-arrow prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <MdChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="lightbox-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img key={lightboxIndex} src={allImages[lightboxIndex]} alt="" />
          </div>

          {/* Next */}
          <button
            className="lightbox-arrow next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <MdChevronRight size={28} />
          </button>

          {/* Counter */}
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
}
