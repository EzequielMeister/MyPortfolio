import useFadeIn from '../hooks/useFadeIn';
import { texts } from '../texts';

export default function Projects({ language }) {
  const [ref, isVisible] = useFadeIn();
  const t = texts[language].projects;

  return (
    <section id="projects" className={`fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2 className="section-title">{t.title}</h2>
      <div className="projects-grid">
        <div className="card">
          <h3>{t.project1_title}</h3>
          <p>{t.project1_desc}</p>
          <a
            className="btn btn-primary"
            href="https://github.com/EzequielMeister/Gestion-turnos-funcional"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.view}
          </a>
        </div>
        <div className="card">
          <h3>{t.project2_title}</h3>
          <p>{t.project2_desc}</p>
          <a
            className="btn btn-primary"
            href="https://github.com/EzequielMeister/pet-shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.view}
          </a>
        </div>
      </div>
    </section>
  );
}
