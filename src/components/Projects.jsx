import "../styles/projects.css";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured <span>Projects</span>
      </motion.h2>

      <motion.div 
        className="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((p, i) => {
          // simple split assuming stack is comma separated or space separated strings
          const stackList = p.stack.split(/[,|]/).map(s => s.trim()).filter(Boolean);

          return (
            <motion.div key={i} className="project-card glass-panel" variants={itemVariants}>
              <h3>{p.title}</h3>
              
              <div className="stack-tags">
                {stackList.length > 0 ? stackList.map((tech, idx) => (
                  <span key={idx} className="stack-tag">{tech}</span>
                )) : <span className="stack-tag">{p.stack}</span>}
              </div>

              <p>{p.description}</p>

              <ul>
                {p.features.map((f, j) => (
                  <li key={j}><span>✔</span> {f}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
