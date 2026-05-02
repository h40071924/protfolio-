import {projects} from "./projectsdata";
import ProjectCard from "./projectcard";
function Project() {
  return (
    <div className="container py-5">

      <h2 className="text-center mb-5 fw-bold">
        My Projects 🚀
      </h2>

      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

    </div>
  );
}

export default Project;