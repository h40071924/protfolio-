function ProjectCard({ project }) {

  return (

    <div className="col-md-6 col-lg-4 mb-4">

      <div className="card shadow border-0 project-card">

        <div className="card-body d-flex flex-column">

          {/* Title */}
          <h5 className="fw-bold mb-3">
            {project.title}
          </h5>

          {/* Tech Stack */}
          <div className="mb-3">

            {project.tech.split("·").map((tech, index) => (

              <span
                key={index}
                className="badge bg-dark me-2 mb-2"
              >
                {tech.trim()}
              </span>

            ))}

          </div>

          {/* Year */}
          <p className="text-secondary small mb-3">
            {project.year}
          </p>

          {/* Description */}
          <ul className="small text-secondary">

            {project.points.map((item, index) => (

              <li key={index} className="mb-2">
                {item}
              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>

  );
}

export default ProjectCard;