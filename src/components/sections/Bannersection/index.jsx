import { user } from "../../../data/user"
import { technologies } from "../../../data/technologies"
import Banner from "../../../assets/banner-img.png"

export const BannerSection = () => {
  return (
    <section className="Bannersection">
      <div className="banner-left">
        <p>Hello, my name is {user}</p>
        <h1>
          I <span className="purple">love</span> creating and{" "}
          <span className="purple">developing</span> projects
        </h1>
        <p>
          Discover here in this environment, created especially for you, all
          my projects and technologies
        </p>
        <div className="banner-buttons">
          <button className="btn-primary">See Projects</button>
          <button className="btn-circle">⚪</button>
        </div>
        <div className="tech-icons">
          {technologies.map((tech) => (
            <img key={tech.name} src={tech.img} alt={tech.name} />
          ))}
        </div>
      </div>
      <div className="banner-right">
        <img src={Banner} alt="Interface exemplo" />
      </div>
    </section>
  )
}