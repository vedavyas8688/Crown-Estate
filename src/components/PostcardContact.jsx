import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function PostcardContact() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="section">
      <div className="content">
        <div className="w-layout-grid grid-postcard">
          <div id="w-node-bd4b83d7-4172-b584-e8bd-71526bc48981-6c01f26c" className="postcard---block-left" data-reveal>
            <div className="postcard-text">
              <img src="/images/subtitle.png" loading="lazy" alt="" width="62" className="image-subtitle" />
              <div className="subtitle">
                Contact
                <br />
              </div>
              <h2 className="heading">Extraordinary events begin here</h2>
              <p className="paragraph">
                Plan your next wedding, reception, family celebration, exhibition, conference, or luxury weekend getaway at Crown Estate – Airport
                Road.
              </p>
              <a href="/contact" className="button w-button">
                Let's connect
              </a>
            </div>
          </div>

          <div id="w-node-bd4b83d7-4172-b584-e8bd-71526bc4898d-6c01f26c" className="postcard---image">
            <div className="overflow-image" style={{ borderRadius: '16px' }}>
              <img className="image" src="/eventimages/15.webp" alt="" loading="lazy" data-reveal data-reveal-distance="50" />
            </div>
            <img
              src="/images/flower_2.png"
              loading="eager"
              alt=""
              className="flower-postcard---c"
              data-reveal
              data-reveal-distance="0"
              data-reveal-delay="0.3"
            />
            <img
              src="/images/flower_5.png"
              loading="eager"
              alt=""
              className="flower-postcard---d"
              data-reveal
              data-reveal-distance="0"
              data-reveal-delay="0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}