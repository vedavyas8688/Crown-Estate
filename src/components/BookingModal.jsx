import { useState } from "react";
import {
  MdClose,
  MdKeyboardArrowDown,
  MdCheckCircleOutline,
} from "react-icons/md";
import { toast } from "react-toastify";

const css = `
@keyframes ceOverlayIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes ceModalIn {
  from { opacity: 0; transform: translateY(24px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.bm-overlay { animation: ceOverlayIn 0.3s ease; }
.bm-card { animation: ceModalIn 0.35s cubic-bezier(0.22, 1, 0.36, 1); }

.bm-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border);
  color: var(--heading);
  font-family: Marcellus, serif;
  font-size: 15px;
  outline: none;
  padding: 4px 0;
  transition: border-color 0.3s;
  line-height: 1.4;
}
.bm-input:focus { border-bottom-color: var(--heading); }
.bm-input::placeholder { color: rgba(109, 112, 94, 0.4); font-size: 14px; }

/* ── 2-col grid — collapses on mobile via globals.css ── */
.bm-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

/* ── Custom Select ── */
.cs-wrap { position: relative; }
.cs-trigger {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border);
  color: var(--heading);
  font-family: Marcellus, serif;
  font-size: 15px;
  outline: none;
  padding: 4px 0;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.3s;
  line-height: 1.4;
}
.cs-trigger.placeholder { color: rgba(109, 112, 94, 0.4); }
.cs-arrow {
  flex-shrink: 0;
  transition: transform 0.2s ease;
  color: var(--heading);
}
.cs-arrow.open { transform: rotate(180deg); }
.cs-dropdown {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  right: 0;
  background: var(--background);
  border: 1px solid var(--border);
  z-index: 200;
  overflow: hidden;
  box-shadow: 0 8px 24px -6px rgba(2, 67, 75, 0.12);
}
.cs-option {
  padding: 5px 12px;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  color: var(--heading);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  line-height: 1.4;
}
.cs-option:hover { background: var(--preload); color: var(--accent); }
.cs-option.selected { color: var(--accent); font-weight: 500; }

/* ── Submit ── */
.bm-submit {
  width: 100%;
  background: var(--subtitle);
  color: #fff;
  border: none;
  padding: 13px 24px;
  font-family: Montserrat, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}
.bm-submit:hover {
  background-color: var(--accent) !important;
  box-shadow: 0 10px 40px -8px var(--accent);
}
.bm-close-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--heading);
  opacity: 0.4;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}
.bm-close-btn:hover { opacity: 1; }
`;

const EVENT_OPTIONS = [
  "Destination Weddings & Receptions",
  "Birthday & Anniversary Celebrations",
  "Family Get-Togethers & Reunions",
  "Luxury Weekend Getaways",
  "Exhibitions & Fashion Shows",
  "Corporate Events & Conferences",
];

function CustomSelect({ name, value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange({
      target: {
        name,
        value: option,
      },
    });
    setOpen(false);
  };

  return (
    <div className="cs-wrap">
      <input type="hidden" name={name} value={value || ""} />

      <button
        type="button"
        className={`cs-trigger${!value ? " placeholder" : ""}`}
        onClick={() => setOpen((o) => !o)}
        onBlur={(e) => {
          if (!e.currentTarget.parentElement.contains(e.relatedTarget)) {
            setOpen(false);
          }
        }}
      >
        <span>{value || "Select an event type"}</span>
        <MdKeyboardArrowDown
          className={`cs-arrow${open ? " open" : ""}`}
          size={18}
        />
      </button>

      {open && (
        <div className="cs-dropdown">
          {EVENT_OPTIONS.map((opt) => (
            <div
              key={opt}
              className={`cs-option${value === opt ? " selected" : ""}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label
        style={{
          display: "block",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "4px",
          color: "var(--heading)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "var(--accent)", marginLeft: "2px" }}>*</span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function BookingModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number is invalid";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://crownestate.in/forms/contact.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log("response", response);

        if (response.ok) {
          const data = await response.json();

          if (data.status === "success") {
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              eventType: "",
              location: "",
              message: "",
            });
            setIsLoading(false);
            toast.success("Successfully we got your info.");
            onClose();
          } else {
            console.error("Error:", data.message);
            setModalMessage(
              data.message || "An error occurred. Please try again.",
            );
            toast.error(data.message);
          }
        } else {
          console.error("Error:", response.statusText);
          setModalMessage("An error occurred. Please try again.");
          toast.error("An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setModalMessage("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      setErrors(formErrors);
      setModalMessage("Please correct the errors in the form.");
      Object.values(formErrors).forEach((error) => {
        toast.error(error);
      });
    }

    setIsLoading(false);
    onClose();
  };

  return (
    <>
      <style>{css}</style>

      <div
        className="bm-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          background: "rgba(2, 67, 75, 0.55)",
          backdropFilter: "blur(6px)",
        }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          className="bm-card"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "520px",
            background: "var(--background)",
            boxShadow: "0 40px 80px -20px rgba(2,67,75,0.35)",
            padding: "28px 40px 28px",
          }}
        >
          <button className="bm-close-btn" aria-label="Close" onClick={onClose}>
            <MdClose size={20} />
          </button>

          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              <img
                src="/images/subtitle.png"
                loading="lazy"
                alt=""
                className="bm-header-logo"
                style={{ width: "32px", display: "block", flexShrink: 0 }}
              />
              <div>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    margin: 0,
                    color: "var(--subtitle)",
                  }}
                >
                  Crown Estate
                </p>
                <h2
                  className="bm-header-title"
                  style={{
                    fontFamily: "Marcellus, serif",
                    fontWeight: 400,
                    margin: 0,
                    lineHeight: 1.2,
                    fontSize: "22px",
                    color: "var(--heading)",
                  }}
                >
                  Request a Callback
                </h2>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                marginBottom: "16px",
                backgroundImage:
                  "linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)",
              }}
            />

            <form onSubmit={handleSubmit}>
              <div className="bm-grid-2">
                <Field label="First Name" required>
                  <input
                    className="bm-input"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Field>
                <Field label="Last Name">
                  <input
                    className="bm-input"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Field>
              </div>

              <div className="bm-grid-2">
                <Field label="Mobile Number" required>
                  <input
                    className="bm-input"
                    name="phone"
                    type="tel"
                    placeholder="Mobile number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Field>
                <Field label="Email">
                  <input
                    className="bm-input"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Field>
              </div>

              <Field label="Event / Service">
                <CustomSelect
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                />
              </Field>

              <Field label="Message">
                <textarea
                  className="bm-input"
                  name="message"
                  placeholder="Tell us about your event…"
                  rows={2}
                  style={{ resize: "none", paddingTop: "4px" }}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Field>

              <button
                type="submit"
                className="bm-submit"
                style={{ marginTop: "8px" }}
              >
                {isLoading ? "Please wait..." : "Request a Callback"}
              </button>
            </form>
          </>
        </div>
      </div>
    </>
  );
}
