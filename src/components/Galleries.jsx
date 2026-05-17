import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { galleryRows } from "../data/content";

export default function Galleries() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="section">
      <div className="content wide">
        <div className="block-heading" data-reveal>
          <img src="/images/subtitle.png" loading="lazy" alt="" width="62" className="image-subtitle" />
          <div className="subtitle">
            Galleries
            <br />
          </div>
          <h2 className="heading">Your grand moments made real</h2>
          <p className="paragraph">
            Explore a venue designed for picture-perfect celebrations, elegant gatherings, luxury stays, and memorable experiences. From open-air
            lawns to comfortable rooms and event-ready spaces, Crown Estate gives every celebration a beautiful backdrop.
          </p>
        </div>

        <div className="w-layout-grid grid-galleries" data-reveal-group>
          {galleryRows.map((row, idx) => (
            <div className={`w-layout-grid grid-galleries---row ${row.margin ? "margin" : ""}`} key={idx}>
              {row.images.map((src) => (
                <a href="#" className="lightbox-link w-inline-block" key={src} onClick={(e) => e.preventDefault()} data-reveal-child>
                  <img className="image-lightbox" src={src} alt="" loading="lazy" />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
