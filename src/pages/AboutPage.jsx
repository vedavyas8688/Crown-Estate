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

      {/* ============ 2. OUR PROPERTIES — alternating left/right ============ */}

      {/* Section heading */}
      <div className="section first">
        <div className="content">
          {/* <div className="block-heading margin" style={{ textAlign: 'center', alignItems: 'center', marginBottom: '60px' }} data-reveal>
            <img src="/images/subtitle.png" loading="lazy" alt="" width="62" className="image-subtitle" />
            <div className="subtitle">Our Properties<br /></div>
            <h2 className="heading">Spaces built for extraordinary celebrations</h2>
          </div> */}

          {/* Crown Estate — text left, image right */}
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <div className="subtitle" style={{ marginBottom: '6px' }}>Airport Road, Bangalore</div>
              <h3 className="heading">Crown Estate</h3>
              <p className="paragraph">
                A luxury private estate spread across 4 acres on Airport Road, Bangalore. Crown Estate is designed for destination weddings,
                grand receptions, family gatherings, corporate events, exhibitions, and luxury weekend getaways — all within a single beautifully
                planned property.
              </p>
              <ul className="inclusion-list" style={{ marginBottom: '32px' }}>
                <li>Capacity: 500–800 guests for events</li>
                <li>20 luxury AC rooms · stay for up to 100 guests</li>
                <li>Suitable For: Weddings, Receptions, Corporates, Exhibitions, Family Events</li>
                <li>Location: Airport Road, Yelahanka, Bangalore – 560119</li>
              </ul>
              <a href="/contact" className="button w-button">Enquire Now</a>
            </div>
            <div className="block-image" data-reveal data-reveal-delay="0.15">
              <div className="overflow-image" style={{ borderRadius: '16px' }}>
                <img className="image" src="/eventimages/crown-estate.webp" alt="Crown Estate" loading="lazy" />
              </div>
              <img src="/images/flower_5.png" loading="eager" alt="" className="flower---a" />
            </div>
          </div>
        </div>
      </div>

      {/* Crown Pavilion I — image left, text right (mobile: text top, image bottom) */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns venue-flip">
            <div className="block-image" data-reveal>
              <div className="overflow-image" style={{ borderRadius: '16px' }}>
                <img className="image" src="/eventimages/banner2.webp" alt="Crown Pavilion I" loading="lazy" />
              </div>
              <img src="/images/flower_2.png" loading="eager" alt="" className="flower---b" />
            </div>
            <div className="block-text" data-reveal data-reveal-delay="0.15">
              <div className="subtitle" style={{ marginBottom: '6px' }}>Bangalore Palace Grounds</div>
              <h3 className="heading">Crown Pavilion I</h3>
              <p className="paragraph">
                An iconic venue at the prestigious Bangalore Palace Grounds, Crown Pavilion I offers a grand and central setting for large-scale
                celebrations. Centrally located and easily accessible, it is ideal for families and guests from across the city.
              </p>
              <ul className="inclusion-list" style={{ marginBottom: '32px' }}>
                <li>Capacity: 1,000 – 2,000 guests</li>
                <li>Suitable For: Weddings, Parties, Corporate Events, Other Celebrations</li>
                <li>Location: Prestigious Bangalore Palace Grounds, central to the city</li>
              </ul>
              <a href="/contact" className="button w-button">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Crown Pavilion II — text left, image right */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-2-columns">
            <div className="block-text" data-reveal>
              <div className="subtitle" style={{ marginBottom: '6px' }}>Bangalore Palace Grounds</div>
              <h3 className="heading">Crown Pavilion II</h3>
              <p className="paragraph">
                Crown Pavilion II is a refined venue at Bangalore Palace Grounds, offering an intimate yet grand setting for celebrations of up to
                1,200 guests. A premium choice for events that demand elegance, comfort, and a central city location.
              </p>
              <ul className="inclusion-list" style={{ marginBottom: '32px' }}>
                <li>Capacity: 1,000 – 1,200 guests</li>
                <li>Suitable For: Weddings, Parties, Corporate Events, Other Celebrations</li>
                <li>Location: Prestigious Bangalore Palace Grounds, central to the city</li>
              </ul>
              <a href="/contact" className="button w-button">Enquire Now</a>
            </div>
            <div className="block-image" data-reveal data-reveal-delay="0.15">
              <div className="overflow-image" style={{ borderRadius: '16px' }}>
                <img className="image" src="/eventimages/banner3.webp" alt="Crown Pavilion II" loading="lazy" />
              </div>
              <img src="/images/flower_4.png" loading="eager" alt="" className="flower---a variant" />
            </div>
          </div>
        </div>
      </div>

      {/* ============ 3. MAIN ABOUT CONTENT ============ */}
      <div className="section">
        <div className="content">
          {/* 3-col image strip: about_2 / about_1 / about_3 */}
          {/* <div className="w-layout-grid grid-3-columns">
            <div className="overflow-image" data-reveal>
              <img src="/eventimages/wedding.webp" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img src="/eventimages/4.png" loading="lazy" alt="" className="image about" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.3">
              <img src="/eventimages/banner1.webp" loading="lazy" alt="" className="image about" />
            </div>
          </div> */}

          {/* "Who we are" text block */}
          {/* <div className="text-about" data-reveal>
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
          </div> */}

          {/* 2-col image strip: about_5 / about_6 */}
          {/* <div className="w-layout-grid grid-2-columns about">
            <div className="overflow-image" data-reveal>
              <img className="image about" src="/eventimages/8.png" loading="lazy" alt="" />
            </div>
            <div className="overflow-image" data-reveal data-reveal-delay="0.15">
              <img className="image about" src="/eventimages/about-crown.webp" loading="lazy" alt="" />
            </div>
          </div> */}

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