import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Quote() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="section quote-section-spacer">
      <div className="content wide">
        <div className="w-layout-grid grid-2-columns quote-responsiveness" style={{ alignItems: 'center' }}>

          {/* Left: Content */}
          <div className="block-text" data-reveal>
            <img src="/images/extra.png" loading="lazy" alt="" width="70" className="image-extra" />
            <h4 className="heading-extra" style={{ textAlign: 'left' }}>
              YOUR CELEBRATION SHOULD BE GRAND, BEAUTIFUL, COMFORTABLE AND TRULY UNFORGETTABLE.
            </h4>
            <p className="paragraph">
              At Crown Estate, every event is designed with space, elegance, and comfort in mind. From destination weddings to lavish weekend getaways,
              our estate brings together luxury rooms, expansive lawns, event-ready spaces, and premium amenities for a seamless celebration experience.
            </p>
            <div className="signature">Crown Estate</div>
          </div>

          {/* Right: Image */}
          <div className="block-image">
            <div className="overflow-image" style={{ borderRadius: '16px' }}>
              <img
                src="/eventimages/60.jpg"
                loading="lazy"
                alt="Crown Estate celebration"
                className="image about"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}