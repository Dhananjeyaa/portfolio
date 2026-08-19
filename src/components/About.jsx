import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About <span>Me</span>
      </motion.h2>

      <motion.div
        className="glass-panel"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "40px", textAlign: "center" }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--text-muted)" }}>
          I’m <strong style={{ color: "var(--text-main)" }}>Arun</strong>, a MERN Stack Developer with internship experience at
          Icanio Technologies. I specialize in building secure REST APIs,
          JWT authentication, and real-time applications using Socket.IO. My goal is to build scalable backend systems and seamless, dynamic user interfaces.
        </p>
      </motion.div>
    </section>
  );
}
