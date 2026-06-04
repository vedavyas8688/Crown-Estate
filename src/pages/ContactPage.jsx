import { useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { toast } from "react-toastify";

export default function ContactPage() {
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

  const ref = useRef(null);
  useScrollReveal(ref);

  const [submitted, setSubmitted] = useState(false);

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
        const response = await fetch("http://localhost/crown/contact.php", {
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
            setTimeout(() => {
              setVisibleModal(false);
            }, 300);
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
    setShowModal(true);
  };

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
              Contact
              <br />
            </div>
            <h1 className="heading-hero" data-hero-reveal>
              Book Your Celebration with Crown Venues
            </h1>
            <p className="paragraph margin" data-hero-reveal>
              Make your special occasion unforgettable with Crown Estate, Crown
              Pavilion I, or Crown Pavilion II. Reach out to us today to check
              availability, discuss your requirements, and reserve the ideal
              venue for your event.
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
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form"
                onSubmit={handleSubmit}
              >
                <div className="field">
                  <label htmlFor="First-Name" className="field-label">
                    First Name
                  </label>
                  <input
                    className="text-field w-input"
                    maxLength="256"
                    name="firstName"
                    data-name="First Name"
                    placeholder="First Name"
                    type="text"
                    id="First-Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="Last-Name" className="field-label">
                    Last Name
                  </label>
                  <input
                    className="text-field w-input"
                    maxLength="256"
                    name="lastName"
                    data-name="Last Name"
                    placeholder="Last Name"
                    type="text"
                    id="Last-Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input
                    className="text-field w-input"
                    maxLength="256"
                    name="email"
                    data-name="Email"
                    placeholder="Email Address"
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="Phone-Number" className="field-label">
                    Phone
                  </label>
                  <input
                    className="text-field w-input"
                    maxLength="256"
                    name="phone"
                    data-name="Phone Number"
                    placeholder="Phone Number"
                    type="tel"
                    id="Phone-Number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="Event-Type" className="field-label">
                    Event Type
                  </label>

                  <select
                    className="text-field w-input"
                    name="eventType"
                    data-name="Event Type"
                    id="Event-Type"
                    value={formData.eventType}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Event Type
                    </option>
                    <option value="Destination Weddings & Receptions">
                      Destination Weddings & Receptions
                    </option>
                    <option value="Exhibitions & Fashion Shows">
                      Exhibitions & Fashion Shows
                    </option>
                    <option value="Corporate Events & Conferences">
                      Corporate Events & Conferences
                    </option>
                    <option value="Birthday & Anniversary Celebrations">
                      Birthday & Anniversary Celebrations
                    </option>
                    <option value="Family Get-Togethers & Reunions">
                      Family Get-Togethers & Reunions
                    </option>
                    <option value="Luxury Weekend Getaways">
                      Luxury Weekend Getaways
                    </option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="Location" className="field-label">
                    Location
                  </label>
                  <input
                    className="text-field w-input"
                    maxLength="256"
                    name="location"
                    data-name="Location"
                    placeholder="Location (State or Country)"
                    type="text"
                    id="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div
                  id="w-node-_4b026346-93f3-f726-63a1-a06a9768c8f3-844f95c8"
                  className="field"
                >
                  <label htmlFor="Message" className="field-label">
                    Message
                  </label>
                  <textarea
                    placeholder="Event Details & Other Questions"
                    maxLength="5000"
                    id="Message"
                    name="message"
                    data-name="Message"
                    className="textarea w-input"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  id="w-node-e6cfd1ab-3860-94e7-1c9b-a3049a18ac06-844f95c8"
                  className="submit-button w-button"
                  value={isLoading ? "Please wait..." : "Submit"}
                  disabled={isLoading}
                />
              </form>
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
              <img
                src="/images/service_icon_1.png"
                loading="lazy"
                width="69"
                alt=""
                className="icon-flower"
              />
              <h4>Address</h4>
              <a
                href="https://maps.google.com/?q=Crown+Estate+Gantiganahalli+Yelahanka+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="link-text"
              >
                <p className="paragraph-info">
                  Yelahanka, 2nd Phase, Gantiganahalli,
                  <br />
                  Bangalore - 560119
                </p>
              </a>
            </div>
            <div className="info" data-reveal data-reveal-delay="0.15">
              <img
                src="/images/service_icon_2.png"
                loading="lazy"
                width="69"
                alt=""
                className="icon-flower"
              />
              <h4>Email</h4>
              <p className="paragraph-info">
                Email Us At:
                <br />
                <a href="mailto:nabilsidd@crownestate.in" className="link-text">
                  nabilsidd@crownestate.in
                </a>
              </p>
            </div>
            <div className="info" data-reveal data-reveal-delay="0.3">
              <img
                src="/images/service_icon_3.png"
                loading="lazy"
                width="69"
                alt=""
                className="icon-flower"
              />
              <h4>Phone</h4>
              <p className="paragraph-info">
                Call Us At:
                <br />
                <a href="tel:9035222022" className="link-text">
                  9035222022
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
