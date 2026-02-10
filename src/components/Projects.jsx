import "../styles/projects.css";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <span className="stack">{p.stack}</span>
            <p>{p.description}</p>

            <ul>
              {p.features.map((f, j) => (
                <li key={j}>✔ {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

