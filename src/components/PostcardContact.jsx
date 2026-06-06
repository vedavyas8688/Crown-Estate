import { useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import BookingModal from "./BookingModal";

export default function PostcardContact() {
  const ref = useRef(null);
  useScrollReveal(ref);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div ref={ref} className="section postcard-contact-section">
        {/*
          The bg image is set as a CSS background-attachment: fixed on this wrapper.
          This makes the image sticky only while THIS section is in view —
          it won't affect any other section on the page.
        */}
        <div className="postcard-contact-wrapper">
          {/* Dark overlay for text legibility */}
          <div className="postcard-overlay" />

          {/* Content */}
          <div className="postcard-contact-inner" data-reveal>
            <img
              src="/images/subtitle.png"
              loading="lazy"
              alt=""
              width="62"
              className="image-subtitle"
            />
            <div className="subtitle" style={{ color: "#cd912c" }}>
              Contact
            </div>{" "}
            <h2 className="heading postcard-heading">
              Extraordinary events
              <br />
              begin here
            </h2>
            <div className="postcard-divider" />
            <p className="paragraph postcard-para">
              Plan your next wedding, reception, family celebration, exhibition,
              conference, or luxury weekend getaway at Crown Estate – Airport
              Road.
            </p>
            <button
              className="button w-button postcard-btn "
              onClick={() => setModalOpen(true)}
              style={{ color: "white" }}
            >
              Let's connect
            </button>
          </div>
        </div>

        <style>{`
          .postcard-contact-section {
            padding: 0 !important;
          }

          .postcard-contact-wrapper {
            position: relative;
            width: 100%;
            min-height: 520px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            /* ── Sticky bg scoped to this section only ── */
            background-image: url('eventimages/70.jpg');
            background-size: cover;
            background-position: center 30%;
            /* fixed = image stays put while the section scrolls over it */
            background-attachment: fixed;
          }

          /* Semi-transparent overlay so white text is legible */
          .postcard-overlay {
            position: absolute;
            inset: 0;
            z-index: 0;
            background: rgba(0, 0, 0, 0.42);
          }

          /* ── Content ── */
          .postcard-contact-inner {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 14px;
            max-width: 600px;
            margin: 0 auto;
            padding: 80px 32px;
          }

          /* All text unified to white */
          .postcard-contact-inner,
          .postcard-contact-inner .subtitle,
          .postcard-contact-inner .heading,
          .postcard-contact-inner .postcard-heading,
          .postcard-contact-inner .postcard-para,
          .postcard-contact-inner p {
            color: #ffffff !important;
          }

          .postcard-heading {
            line-height: 1.2;
          }

          .postcard-divider {
            width: 48px;
            height: 1.5px;
            background: #ffffff;
            opacity: 0.45;
            margin: 4px 0;
          }

          .postcard-para {
            max-width: 480px;
            font-weight: 300 !important;
            letter-spacing: 0.02em;
            line-height: 1.75;
          }

          .postcard-btn {
            margin-top: 8px;
            cursor: pointer;
          }

          /* iOS Safari doesn't support background-attachment: fixed inside
             overflow:hidden — fall back to a plain cover image on mobile */
          @media (max-width: 768px) {
            .postcard-contact-wrapper {
              min-height: 420px;
              background-attachment: scroll;
            }
            .postcard-contact-inner {
              padding: 60px 24px;
            }
          }
        `}</style>
      </div>

      {modalOpen && <BookingModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
