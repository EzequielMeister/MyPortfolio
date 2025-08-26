import useFadeIn from '../hooks/useFadeIn';
import { texts } from '../texts';

export default function Skills({ language }) {
  const [ref, isVisible] = useFadeIn();
  const t = texts[language].skills;

  return (
    <section id="skills" className={`fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2 className="section-title">{t.title}</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>{t.techTitle}</h3>
          <ul>
            {t.techList.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div className="skills-card">
          <h3>{t.funcTitle}</h3>
          <ul>
            {t.funcList.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
