import useFadeIn from '../hooks/useFadeIn';
import { texts } from '../texts';

export default function About({ language }) {
  const [ref, isVisible] = useFadeIn();

  return (
    <section id="about" className={`fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2 className="section-title">{texts[language].about.title}</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <p>{texts[language].about.p1}</p>
          <p>{texts[language].about.p2}</p>
        </div>
      </div>
    </section>
  );
}
