import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="container py-5">
      <h2>Contacto</h2>
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
