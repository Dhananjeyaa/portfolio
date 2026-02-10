import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <span
            className="contact-text1"
            title="arunsathish9556954@gmail.com"
          >
            arunsathish9556954@gmail.com
          </span>
      </div>

      <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <h3 className="contact-text">8124098906</h3>
      </div>
    </section>
  );
}

