import esFlag from '../img/es.png';
import enFlag from '../img/en.png';

export default function Navbar({ language, setLanguage }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold">Ezequiel Meister</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#about">{language === "es" ? "Sobre mí" : "About Me"}</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">{language === "es" ? "Proyectos" : "Projects"}</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">{language === "es" ? "Habilidades" : "Skills"}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{language === "es" ? "Contacto" : "Contact"}</a></li>
            <li className="nav-item">
              <a className="btn btn-primary ms-3" href="/resume.pdf" download>Download Resume</a>
            </li>

            <li className="nav-item ms-3 d-flex align-items-center">
              <img
                src={esFlag}
                alt="Español"
                style={{ cursor: "pointer", width: "25px", marginRight: "5px" }}
                onClick={() => setLanguage("es")}
              />
              <img
                src={enFlag}
                alt="English"
                style={{ cursor: "pointer", width: "25px" }}
                onClick={() => setLanguage("en")}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
