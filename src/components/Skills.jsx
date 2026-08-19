import "../styles/skills.css"
import { skills } from "../data/skills"
import { motion } from "framer-motion"

export default function Skills(){
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return(
        <section id="skills" className="section">
            <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Technical <span>Skills</span>
            </motion.h2>

            <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {skills.map((skill, i) => (
                <motion.div
                    key={i}
                    className="skill-card glass-panel"
                    style={{ "--hover-color": skill.color }}
                    variants={itemVariants}
                >
                    {skill.name}
                </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
