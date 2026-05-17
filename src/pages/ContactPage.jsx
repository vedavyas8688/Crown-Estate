import { useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ContactPage() {
  const ref = useRef(null)
  useScrollReveal(ref)

  const [submitted, setSubmitted] = useState(false)

  return (
    <div ref={ref}>
      {/* ============ 0. HERO — same section-hero.page pattern as Services/About ============ */}
      <div className="section-hero page">
        <div className="content">
          <div className="hero-top">
            <div className="border-top" data-hero-reveal></div>
            <img
              src="/images/subtitle.png"
              loading="lazy"
              alt=""
              width="62"
              className="image-subtitle"
              data-hero-reveal
            />
            <div className="subtitle" data-hero-reveal>
              Contact<br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>
              We look forward to connecting with you!
            </h1>
            <p className="paragraph margin" data-hero-reveal>
              Lectus sit turpis iaculis eu non sed turpis suscipit facilisi. Lorem morbi
              non morbi id aliquam. Urna adipiscing odio.
            </p>
            <div className="border-down margin" data-hero-reveal></div>
          </div>
        </div>
      </div>

      {/* ============ 1. CONTACT FORM ============ */}
      <div className="section first">
        <div className="content">
          <div className="contact" data-reveal>
            <div className="form-block w-form">
              {!submitted && (
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="field">
                    <label htmlFor="First-Name" className="field-label">First Name</label>
                    <input className="text-field w-input" maxLength="256" name="First-Name" data-name="First Name" placeholder="First Name" type="text" id="First-Name" />
                  </div>
                  <div className="field">
                    <label htmlFor="Last-Name" className="field-label">Last Name</label>
                    <input className="text-field w-input" maxLength="256" name="Last-Name" data-name="Last Name" placeholder="Last Name" type="text" id="Last-Name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input className="text-field w-input" maxLength="256" name="email" data-name="Email" placeholder="Email Address" type="email" id="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="Phone-Number" className="field-label">Phone</label>
                    <input className="text-field w-input" maxLength="256" name="Phone-Number" data-name="Phone Number" placeholder="Phone Number" type="tel" id="Phone-Number" required />
                  </div>
                  <div className="field">
                    <label htmlFor="Event-Type" className="field-label">Event Type</label>
                    <input className="text-field w-input" maxLength="256" name="Event-Type" data-name="Event Type" placeholder="Event Type" type="text" id="Event-Type" />
                  </div>
                  <div className="field">
                    <label htmlFor="Location" className="field-label">Location</label>
                    <input className="text-field w-input" maxLength="256" name="Location" data-name="Location" placeholder="Location (State or Country)" type="text" id="Location" />
                  </div>
                  <div
                    id="w-node-_4b026346-93f3-f726-63a1-a06a9768c8f3-844f95c8"
                    className="field"
                  >
                    <label htmlFor="Message" className="field-label">Message</label>
                    <textarea
                      placeholder="Event Details & Other Questions"
                      maxLength="5000"
                      id="Message"
                      name="Message"
                      data-name="Message"
                      className="textarea w-input"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    id="w-node-e6cfd1ab-3860-94e7-1c9b-a3049a18ac06-844f95c8"
                    className="submit-button w-button"
                    value="Submit"
                  />
                </form>
              )}

              {submitted && (
                <div className="success-message w-form-done" style={{ display: 'block', padding: '20px' }}>
                  <div className="text-success">
                    Thank you! Your submission has been received!
                  </div>
                </div>
              )}
            </div>

            {/* Watercolor decorations — flower_1 top-left, flower_6 bottom-right */}
            <img
              src="/images/flower_1.png"
              loading="eager"
              alt=""
              className="flower-contact---a"
            />
            <img
              src="/images/flower_6.png"
              loading="eager"
              alt=""
              className="flower-contact---b"
            />
          </div>
        </div>
      </div>

      {/* ============ 2. ADDRESS / EMAIL / PHONE INFO ============ */}
      <div className="section">
        <div className="content">
          <div className="w-layout-grid grid-3-columns">
            <div className="info" data-reveal>
              <img src="/images/service_icon_1.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h4>Address</h4>
              <p className="paragraph-info">
                 Yelahanka, 2nd Phase, Gantiganahalli,  <br />
                 Bangalore - 560119
              </p>
            </div>
            <div className="info" data-reveal data-reveal-delay="0.15">
              <img src="/images/service_icon_2.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h4>Email</h4>
              <p className="paragraph-info">
                Email Us At:<br />
                <a href="mailto:nabilsidd@crownestate.in" className="link-text">nabilsidd@crownestate.in</a>
              </p>
            </div>
            <div className="info" data-reveal data-reveal-delay="0.3">
              <img src="/images/service_icon_3.png" loading="lazy" width="69" alt="" className="icon-flower" />
              <h4>Phone</h4>
              <p className="paragraph-info">
                Call Us At:<br />
                <a href="tel:9035222022" className="link-text">9035222022</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
