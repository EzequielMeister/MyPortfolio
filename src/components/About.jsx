import useFadeIn from '../hooks/useFadeIn';

export default function About() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section id="about" className={`fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2 className="section-title">👨‍💻 Sobre mí</h2>
      <div className="card p-4 shadow text">
        <p>
          Soy Analista en Sistemas en formación, con experiencia en análisis de procesos,
          documentación de requerimientos y automatización administrativa. Me interesa
          desarrollarme en roles técnico-funcionales, colaborando con usuarios y equipos de
          desarrollo.
        </p>
        <p>
          Tengo conocimientos en Java, JavaScript y SQL, y experiencia con 
          Spring Boot, Node.js y React, que me permiten traducir necesidades
          del negocio en soluciones tecnológicas efectivas.
        </p>
      </div>
    </section>
  );
}
