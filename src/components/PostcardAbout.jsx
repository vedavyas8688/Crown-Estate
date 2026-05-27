import { useRef } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function PostcardAbout() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="section">
      <div className="content">
        <div className="w-layout-grid grid-postcard">
          <div id="w-node-a38a8908-1dc6-e0b5-39a4-e35f06688720-6c01f26c" className="postcard---block-right" data-reveal>
            <div className="postcard-text">
              <img src="/images/subtitle.png" loading="lazy" alt="" width="62" className="image-subtitle" />
              <div className="subtitle">
                who we are
                <br />
              </div>
              <h2 className="heading">We create space for unforgettable celebrations</h2>
              <p className="paragraph">
                Crown Estate is a luxury event and stay destination located on Airport Road, spread across 4 acres of beautifully planned space. With
                expansive lawns, hall area, swimming pool, children's play area, multiple kitchens, and 20 luxury AC rooms, the property is ideal for
                both grand celebrations and private retreats.
              </p>
              <Link to="/about" className="button w-button">
                more about us
              </Link>
            </div>
          </div>

          <div id="w-node-d2924451-e09a-bd31-2cf5-d17c83bb6e82-6c01f26c" className="postcard---image">
            <div className="overflow-image" style={{ borderRadius: '16px' }}>
              <img className="image" src="/eventimages/crown-estate.webp" alt="" loading="lazy" data-reveal data-reveal-distance="50" />
            </div>
            <img
              src="/images/flower_1.png"
              loading="eager"
              alt=""
              className="flower-postcard---a"
              data-reveal
              data-reveal-distance="0"
              data-reveal-delay="0.3"
            />
            <img
              src="/images/flower_3.png"
              loading="eager"
              alt=""
              className="flower-postcard---b"
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