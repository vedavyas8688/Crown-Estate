import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Testimonials from "../components/Testimonials";

export default function AboutPage() {
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
              who we are
              <br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>
              About Crown Estate
            </h1>
            <p className="paragraph margin" data-hero-reveal>
              Crown Estate is a luxury event and stay destination on Airport Road, designed for grand celebrations, elegant gatherings, and memorable
              private experiences.
            </p>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div>

      {/* ============ 2. MAIN ABOUT CONTENT ============ */}
      <div className="section first">
        <div className="content">
          {/* 3-col image strip: about_2 / about_1 / about_3 */}
          <div className="w-layout-grid grid-3-columns">
            <div className="overflow-image" data-reveal>
              <img src="/eventimages/wedding.webp" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img src="/eventimages/4.png" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.3">
              <img src="/eventimages/banner1.webp" loading="lazy" alt="" className="image about" />
            </div>
          </div>

          {/* "Who we are" text block */}
          <div className="text-about" data-reveal>
            <img src="/images/extra.png" loading="lazy" alt="" width="70" className="image-extra" />
            <h3>CROWN ESTATE</h3>
            <p>
              Crown Estate is a premium private estate created for people who want their celebrations to feel spacious, elegant, and truly
              unforgettable. Located on Airport Road, the property offers a beautiful setting for destination weddings, grand receptions, nikah
              ceremonies, family get-togethers, reunions, birthday celebrations, anniversary retreats, exhibitions, fashion shows, conferences, and
              luxury weekend getaways.
              <br />
              <br />
              With 20 luxury AC rooms that can accommodate up to 100 guests, expansive lawns, a spacious hall area, swimming pool, children’s play
              area, and multiple kitchens, Crown Estate is designed to host both intimate gatherings and large-scale events with ease.
              <br />
              <br />
              Every corner of the estate is planned to give guests comfort, convenience, and a premium celebration experience. Whether you are hosting
              a traditional wedding, a corporate event, or a private family retreat, Crown Estate gives you the space and setting to make it special.
            </p>
          </div>

          {/* 2-col image strip: about_5 / about_6 */}
          <div className="w-layout-grid grid-2-columns about">
            <div className="overflow-image" data-reveal>
              <img className="image about" src="/eventimages/8.png" loading="lazy" alt="" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img className="image about" src="/eventimages/about-crown.webp" loading="lazy" alt="" />
            </div>
          </div>

          {/* "Our process" text block */}
          <div className="text-about" data-reveal>
            <img src="/images/extra.png" loading="lazy" alt="" width="70" className="image-extra" />
            <h3>OUR APPROACH</h3>
            <p>
              At Crown Estate, we make event planning simple, organized, and comfortable. From the first enquiry to the final celebration, our team
              helps you understand the venue, package details, stay arrangements, event spaces, and setup options clearly.
              <br />
              <br />
              We begin by understanding your event type, expected guest count, stay requirements, and preferred setup. Based on your celebration, we
              guide you through the best use of our lawns, hall area, rooms, kitchens, stage setup, seating arrangements, and amenities.
              <br />
              <br />
              Our goal is to provide a smooth venue experience where families, guests, planners, and vendors can coordinate easily. With a 4-acre
              property, accommodation for up to 100 guests, and seating support for 500 to 800 pax, Crown Estate is ready for celebrations of every
              scale.
            </p>
          </div>

          {/* "Featured in" — text on a horizontal gradient line */}
          {/* <div className="block-subtitle-border" data-reveal>
            <div className="subtitle-border">
              Featured in
              <br />
            </div>
          </div> */}

          {/* 6 press logos — class .press.logo-N controls border-left/right behaviour */}
          {/* <div className="w-layout-grid grid-press margin" data-reveal-group>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className={`press logo-${n}`} data-reveal-child>
                <img src={`/images/sample_logo_${n}.svg`} loading="lazy" alt="" className="press-logo" />
              </div>
            ))}
          </div> */}

          {/* 3-col image strip: about_7 / about_8 / about_9 */}
          <div className="w-layout-grid grid-3-columns" style={{ marginTop: "76px" }}>
            <div className="overflow-image" data-reveal>
              <img src="/eventimages/1.png" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img src="/eventimages/2.png" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.3">
              <img src="/eventimages/3.png" loading="lazy" alt="" className="image about" />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 3. TESTIMONIALS ============ */}
      <Testimonials />
    </div>
  );
}
