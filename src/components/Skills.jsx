import "../styles/skills.css"
import {skills} from "../data/skills"

export default function Skills(){
    return(
        <section id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills-grid">
                {skills.map((skill, i) => (
                <div
                    key={i}
                    className="skill-card"
                    style={{ "--hover-color": skill.color }}
                >
                    {skill.name}
                </div>
                ))}
            </div>
        </section>
    )
}
