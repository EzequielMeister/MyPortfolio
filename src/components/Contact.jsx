import useFadeIn from '../hooks/useFadeIn';

export default function Contact() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section id="contact" className={`fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2 className="section-title">📬 Contacto</h2>
      <div className="text-center">
        <a href="mailto:ezee7771@gmail.com" className="me-3 btn btn-secondary">Email</a>
        <a href="https://www.linkedin.com/in/ezequiel-meister-a75115242/"
           target="_blank" rel="noopener noreferrer" className="me-3 btn btn-secondary">
          LinkedIn
        </a>
        <a href="https://github.com/EzequielMeister"
           target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          GitHub
        </a>
      </div>
    </section>
  );
}
