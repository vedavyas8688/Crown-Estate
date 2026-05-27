import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { galleryRows } from "../data/content";

export default function Galleries({
  images,
  subtitle = "Galleries",
  heading = "Your grand moments made real",
  body = "Explore a venue designed for picture-perfect celebrations, elegant gatherings, luxury stays, and memorable experiences. From open-air lawns to comfortable rooms and event-ready spaces, Crown Estate gives every celebration a beautiful backdrop.",
}) {
  const ref = useRef(null);
  useScrollReveal(ref);

  // If custom images array passed, chunk into rows of 2 with alternating margin.
  // Otherwise fall back to galleryRows from content.js (used on the homepage).
  const rows = images
    ? images.reduce((acc, src, i) => {
        const rowIndex = Math.floor(i / 2);
        if (!acc[rowIndex]) acc[rowIndex] = { images: [], margin: rowIndex % 2 !== 0 };
        acc[rowIndex].images.push(src);
        return acc;
      }, [])
    : galleryRows;

  return (
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
                  onClick={(e) => e.preventDefault()}
                  data-reveal-child
                  style={{ borderRadius: "16px" }}
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
  );
}