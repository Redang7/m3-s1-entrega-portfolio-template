import { projects } from "../../../data/projects"
import githubIcon from "../../../assets/git-icon.png"
import portfolioIcon from "../../../assets/portfolio.png"

export const ProjectSection = () => {
  return (
    <section className="myprojects">
      <h2>My projects</h2>
      <p>
        Projects created at{" "}
        <span className="highlight">Kenzie Academy</span>
      </p>

      <ul className="project-list">
        {projects.map((project, index) => (
          <li className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.name}</h3>
              {index === 0 && <span className="new-badge">New</span>}
            </div>
            <p>
              Linguagens: <span className="badge">Javascript</span>
            </p>
            <p className="desc">{project.description}</p>
            <div className="project-links">
              <a href="#">
                <img src={githubIcon} alt="GitHub" /> Github Code
              </a>
              <a href="#">
                <img src={portfolioIcon} alt="Deploy" /> Aplicação
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}