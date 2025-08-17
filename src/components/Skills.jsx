import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        <div className="skills-card">
          <h3>🖥️ Habilidades Técnicas</h3>
          <ul>
            <li>Java (Spring Boot): backend, APIs REST</li>
            <li>JavaScript (React / Node.js)</li>
            <li>HTML5 y CSS3: diseño responsive</li>
            <li>SQL Server / MySQL: consultas, joins y validaciones</li>
            <li>Git / GitHub: control de versiones</li>
            <li>Express.js / APIs REST / POO / Patrones de diseño</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>📊 Habilidades Funcionales</h3>
          <ul>
            <li>Relevamiento y análisis de requerimientos</li>
            <li>Historias de usuario</li>
            <li>Testing funcional y validación de procesos</li>
            <li>Diagramas de flujo y modelado de procesos</li>
            <li>Comunicación entre usuarios y áreas técnicas</li>
            <li>Documentación funcional y técnica</li>
            <li>Gestión de tareas (Trello, Notion, Excel avanzado)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
