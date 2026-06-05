{projects.map((project, index) => (
  <div key={index}>
    <h3>{project.title}</h3>
    <p>{project.tech}</p>

    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </a>
  </div>
))}