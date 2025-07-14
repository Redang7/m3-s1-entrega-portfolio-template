import "./styles/index.css";
import bannerImg from "./assets/banner-img.png";
import htmlIcon from "./assets/html-icon.png";
import cssIcon from "./assets/css-icon.png";
import jsIcon from "./assets/js-icon.png";
import reactIcon from "./assets/react-icon.png";
import githubIcon from "./assets/github-icon.png";
import whatsappIcon from "./assets/whatsapp-icon.png";
import linkedinIcon from "./assets/linkedin-icon.png";
import gitIcon from "./assets/git-icon.png";
import perfil from "./assets/perfil.png";
import share from "./assets/shareico.png";

function App() {
  return (
    <>
      <header>
        <div className="header-container">
          <h1 className="logo">Anna</h1>
          <nav className="nav-menu">
            <button>Home</button>
            <button>Projects</button>
            <button>Contatos</button>
            <button>Midias Digit ais</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="Bannersection">
          <div className="banner-left">
            <img src={perfil} alt="perfil" />
            <p>Hello, my name is Anna</p>
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
              <img src={htmlIcon} alt="HTML" />
              <img src={cssIcon} alt="CSS" />
              <img src={jsIcon} alt="JavaScript" />
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          <div className="banner-right">
            <img src={bannerImg} alt="Interface exemplo" />
          </div>
        </section>

        <section className="myprojects">
          <h2>My projects</h2>
          <p>
            Projects created at{" "}
            <span className="highlight">Kenzie Academy</span>
          </p>

          <div className="project-grid">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="project-card" key={i}>
                <div className="project-header">
                  <h3>Quickstart</h3>
                  {i === 0 && <span className="new-badge">New</span>}
                </div>
                <p>Linguagens: <span className="badge">Javascript</span></p>
                <p className="desc">
                  Descrição do projeto contendo as informações sobre finalidade
                  da aplicação e como está organizado o repositório...
                </p>
                <div className="project-links">
                  <a href="#">
                    <img src={githubIcon} alt="GitHub" /> Github Code
                  </a>
                  <a href="#">
                    <img src={share} alt="Deploy" /> Aplicação
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sectionlist">
          <div className="contact-left">
            <h2>
              Let's set up a conversation and{" "}
              <span className="purple">develop our creativity</span> together?
            </h2>
            <p>
              Advertise your brand organically within Dribbble's design
              inspiration feed.
            </p>
          </div>
          <ul className="contact-list">
            <li>
              <img src={whatsappIcon} alt="Whatsapp" />
              <h3>My phone</h3>
              <p>
                I'm available for a voice chat, let's about creativity together?
              </p>
              <a href="#">Call Now</a>
            </li>
            <li>
              <img src={gitIcon} alt="Email" />
              <h3>My email</h3>
              <p>
                Send me an email reporting feedbacks, suggestions and ideas
              </p>
              <a href="#">Send email now</a>
            </li>
            <li>
              <img src={linkedinIcon} alt="LinkedIn" />
              <h3>My LinkedIn</h3>
              <p>
                We can create more constant interactions as well as a sharing
                network
              </p>
              <a href="#">Go to Telegram Now</a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <section className="footer-section">
          <img src={perfil} alt="Perfil" />
          <h2>Thank you!</h2>
          <p>Follow me on my social networks and let's talk</p>
          <div className="social-icons">
            <img src={githubIcon} alt="Facebook" />
            <img src={gitIcon} alt="Instagram" />
            <img src={linkedinIcon} alt="LinkedIn" />
          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
