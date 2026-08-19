import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My <span>Experience</span>
      </motion.h2>

      <motion.div 
        className="glass-panel"
        style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 50px" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "1.4rem", color: "var(--neon-secondary)", margin: 0 }}>
            Software Development Intern – <span style={{ color: "var(--text-main)" }}>Icanio Technologies</span>
          </h3>
          <span style={{ color: "var(--neon-primary)", fontWeight: "600", whiteSpace: "nowrap" }}>Sept 2023 – Dec 2023</span>
        </div>
        
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "14px", display: "flex", gap: "10px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            <span style={{ color: "var(--neon-primary)", flexShrink: 0 }}>✔</span> 
            <span>Developed and maintained RESTful APIs using ASP.NET Core, adhering to clean architecture and scalability best practices.</span>
          </li>
          <li style={{ marginBottom: "14px", display: "flex", gap: "10px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            <span style={{ color: "var(--neon-primary)", flexShrink: 0 }}>✔</span> 
            <span>Designed a Communication Hub module as a centralized interaction layer, reducing component coupling and improving system reliability.</span>
          </li>
          <li style={{ marginBottom: "14px", display: "flex", gap: "10px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            <span style={{ color: "var(--neon-primary)", flexShrink: 0 }}>✔</span> 
            <span>Implemented JWT-based authentication and authorization to secure sensitive endpoints and user data.</span>
          </li>
          <li style={{ marginBottom: "14px", display: "flex", gap: "10px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            <span style={{ color: "var(--neon-primary)", flexShrink: 0 }}>✔</span> 
            <span>Engineered backend features including server-side pagination, filtering, and centralized exception handling.</span>
          </li>
          <li style={{ display: "flex", gap: "10px", color: "var(--text-muted)", lineHeight: "1.6" }}>
            <span style={{ color: "var(--neon-primary)", flexShrink: 0 }}>✔</span> 
            <span>Collaborated in an Agile environment to refactor legacy code and improve overall application performance and response time.</span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

