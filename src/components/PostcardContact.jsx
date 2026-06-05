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
        <div className="postcard-contact-wrapper">
           <div className="postcard-bg">
            <img
              src="eventimages/70.jpg"
              alt=""
              className="postcard-bg-img"
            />
            <div className="postcard-bg-overlay" />
          </div>

          {/* Content */}
          <div className="postcard-contact-inner" data-reveal>
            <img
              src="/images/subtitle.png"
              loading="lazy"
              alt=""
              width="62"
              className="image-subtitle"
            />
            <div className="subtitle">Contact</div>
            <h2 className="heading postcard-heading">
              Extraordinary events<br />begin here
            </h2>
            <div className="postcard-divider" />
            <p className="paragraph postcard-para">
              Plan your next wedding, reception, family celebration, exhibition,
              conference, or luxury weekend getaway at Crown Estate – Airport Road.
            </p>
            <button
              className="button w-button postcard-btn"
              onClick={() => setModalOpen(true)}
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
          }

          .postcard-bg {
            position: absolute;
            inset: 0;
            z-index: 0;
          }

          .postcard-bg-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 30%;
            display: block;
          }

          .postcard-bg-overlay {
            position: absolute;
            inset: 0;
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
          }

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

          .postcard-heading {
            line-height: 1.2;
            color: #111111 !important;
          }

          .postcard-contact-inner .subtitle {
            color: #111111 !important;
          }

          .postcard-divider {
            width: 48px;
            height: 1.5px;
            background: #111111;
            opacity: 0.35;
            margin: 4px 0;
          }

          .postcard-para {
            max-width: 480px;
            color: #1a1a1a !important;
            font-weight: 500 !important;
          }

          .postcard-btn {
            margin-top: 8px;
            cursor: pointer;
          }

          @media (max-width: 768px) {
            .postcard-contact-wrapper {
              min-height: 420px;
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