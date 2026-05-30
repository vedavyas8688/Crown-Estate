import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function PostcardContact() {
  const ref = useRef(null);
  useScrollReveal(ref);

  return (
    <div ref={ref} className="section">
      <div className="content">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", maxWidth: "600px", margin: "0 auto" }}>
          <img src="/images/subtitle.png" loading="lazy" alt="" width="62" className="image-subtitle" />
          <div className="subtitle">Contact</div>
          <h2 className="heading">Extraordinary events begin here</h2>
          <p className="paragraph">
            Plan your next wedding, reception, family celebration, exhibition, conference, or luxury weekend getaway at Crown Estate – Airport Road.
          </p>
          <a href="/contact" className="button w-button">
            Let's connect
          </a>
        </div>
      </div>
    </div>
  );
}