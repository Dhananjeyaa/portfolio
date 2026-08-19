import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
import "../styles/contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="contact" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In <span>Touch</span>
      </motion.h2>

      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="contact-subtitle">
          I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-buttons-row">
          <motion.a
            href="mailto:arunsathish9556954@gmail.com"
            className="contact-icon-btn"
            variants={itemVariants}
            aria-label="Email"
            title="Send Email"
          >
            <FaEnvelope className="contact-icon" />
          </motion.a>

          <motion.a
            href="tel:8124098906"
            className="contact-icon-btn"
            variants={itemVariants}
            aria-label="Phone"
            title="Call Phone"
          >
            <FaPhoneAlt className="contact-icon" />
          </motion.a>

          <motion.a
            href="https://github.com/dhananjeyaa"
            target="_blank"
            rel="noreferrer"
            className="contact-icon-btn"
            variants={itemVariants}
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <FaGithub className="contact-icon" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

