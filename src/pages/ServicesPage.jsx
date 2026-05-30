import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref}>
      {/* ============ 1. HERO ============ */}
      <div className="section-hero page">
        <div className="content">
          <div className="hero-top">
            <div className="border-top" data-hero-reveal></div>
            <img src="/images/subtitle.png" loading="lazy" alt="" width="62" className="image-subtitle" data-hero-reveal />
            <div className="subtitle" data-hero-reveal>
              Services
              <br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>
              Our Services
            </h1>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div>

      {/* ============ 1. Destination Weddings — text left, image right ============ */}
      <div className="section first">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <img src="/images/service_icon_1.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h3 className="heading">Destination Weddings & Receptions</h3>
              <p className="paragraph">
                Host your dream destination wedding or grand reception at Crown Estate, a luxury 4-acre wedding venue on Airport Road, Bangalore with
                lawns, AC rooms, hall area, stage setup and guest accommodation.
              </p>
              <Link to={"/services/destination-weddings-and-receptions"} className="link">
                learn more
              </Link>
            </div>
            <div className="block-image" data-reveal>
              <div className="overflow-image" style={{ borderRadius: "16px" }}>
                <img className="image" src="/eventimages/banner2.webp" alt="Destination Weddings & Receptions" loading="lazy" />
              </div>
              <img src="/images/flower_5.png" loading="eager" alt="" className="flower---a" />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 2. Exhibitions & Fashion Shows — image left, text right ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-image" data-reveal>
              <div className="overflow-image" style={{ borderRadius: "16px" }}>
                <img className="image" src="/eventimages/3.png" alt="Exhibitions & Fashion Shows" loading="lazy" />
              </div>
              <img src="/images/flower_2.png" loading="eager" alt="" className="flower---b" />
            </div>
            <div className="block-text" data-reveal>
              <img src="/images/service_icon_3.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h3 className="heading">Exhibitions & Fashion Shows</h3>
              <p className="paragraph">
                Host exhibitions, fashion shows, car displays, clothing fairs and lifestyle events at Crown Estate, a spacious 4-acre exhibition venue
                on Airport Road, Bangalore.
              </p>
              <Link to={"/services/exhibitions-and-fashion-shows"} className="link">
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ 3. Corporate Events — text left, image right ============ */}
      <div className="section">
        <div className="content service3-responsiveness">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <img src="/images/service_icon_2.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h3 className="heading">Corporate Events & Conferences</h3>
              <p className="paragraph">
                Plan corporate events, conferences, team outings, leadership retreats and product showcases at Crown Estate, a premium corporate event
                venue on Airport Road, Bangalore.
              </p>
              <Link to={"/services/corporate-events-and-conferences"} className="link">
                learn more
              </Link>
            </div>
            <div className="block-image" data-reveal>
              <div className="overflow-image" style={{ borderRadius: "16px" }}>
                <img className="image" src="/eventimages/banner1.webp" alt="Corporate Events & Conferences" loading="lazy" />
              </div>
              <img src="/images/flower_4.png" loading="eager" alt="" className="flower---a variant" />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 4. Birthday & Anniversary — image left, text right ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-image" data-reveal>
              <div className="overflow-image" style={{ borderRadius: "16px" }}>
                <img className="image" src="/eventimages/4.png" alt="Birthday & Anniversary Celebrations" loading="lazy" />
              </div>
              <img src="/images/flower_2.png" loading="eager" alt="" className="flower---b" />
            </div>
            <div className="block-text" data-reveal>
              <img src="/images/service_icon_2.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h3 className="heading">Birthday & Anniversary Celebrations</h3>
              <p className="paragraph">
                Celebrate milestone birthdays and anniversaries at Crown Estate, a luxury private event venue in Bangalore with lawns, rooms, poolside
                spaces and premium celebration facilities.
              </p>
              <Link to={"/services/birthday-and-anniversary-celebrations"} className="link">
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ 5. Family Get-Togethers — text left, image right ============ */}
      <div className="section">
        <div className="content service5-responsiveness">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <img src="/images/service_icon_3.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h3 className="heading">Family Get-Togethers & Reunions</h3>
              <p className="paragraph">
                Bring your loved ones together at Crown Estate, a spacious family get-together venue in Bangalore with rooms, lawns, pool, play area
                and private celebration spaces.
              </p>
              <Link to={"/services/family-get-togethers-and-reunions"} className="link">
                learn more
              </Link>
            </div>
            <div className="block-image" data-reveal>
              <div className="overflow-image" style={{ borderRadius: "16px" }}>
                <img className="image" src="/eventimages/6.png" alt="Family Get-Togethers & Reunions" loading="lazy" />
              </div>
              <img src="/images/flower_4.png" loading="eager" alt="" className="flower---a variant" />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 6. Luxury Weekend Getaways — image left, text right ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-image" data-reveal>
              <div className="overflow-image" style={{ borderRadius: "16px" }}>
                <img className="image" src="/eventimages/crown-estate.webp" alt="Luxury Weekend Getaways" loading="lazy" />
              </div>
              <img src="/images/flower_2.png" loading="eager" alt="" className="flower---b" />
            </div>
            <div className="block-text" data-reveal>
              <img src="/images/service_icon_1.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h3 className="heading">Luxury Weekend Getaways</h3>
              <p className="paragraph">
                Escape to Crown Estate for a luxury weekend getaway near Bangalore with 20 AC rooms, swimming pool, children's play area, open lawns
                and private group stay facilities.
              </p>
              <Link to={"/services/luxury-weekend-getaways"} className="link">
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ 7. TESTIMONIALS ============ */}
      <Testimonials />
    </div>
  );
}