import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2>Proyectos</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3>Sistema de Gestión de Turnos Médicos</h3>
              <p>
                Desarrollo en <strong>Java + Spring Boot</strong> con conexión a SQL Server. 
                Incluye documentación, diagramas y pruebas funcionales.
              </p>
              <a href="https://github.com/EzequielMeister/Gestion-turnos-funcional"
                 target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                 Ver en GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow h-100">
            <div className="card-body">
              <h3>Sistema de Administración de Pet Shop</h3>
              <p>
                Solución en <strong>Kotlin</strong> para gestión de clientes, productos y servicios.
              </p>
              <a href="https://github.com/EzequielMeister/pet-shop"
                 target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                 Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
