export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container">
        <span className="navbar-brand fw-bold">Ezequiel Meister</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#about">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Habilidades</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
            <li className="nav-item">
              <a className="btn btn-primary ms-3" href="/resume.pdf" download>Download Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
