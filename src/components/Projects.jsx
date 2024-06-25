import { PROJECTS } from "../constants/index.js";

function Projects() {
  return (
    <div className=" border-b border-neutral-900 pb-4">
      <h2 className=" my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
            <div className=" w-full lg:w-1/4">
              <img
                src={project.image}
                height={150}
                width={150}
                alt={project.title}
                className=" mb-6 rounded"
              />
            </div>
            <div className=" w-full max-w-xl lg:w-3/4">
              <h6 className=" mb-2 font-semibold hover:text-cyan-50 ">
                <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h6>
              <p className=" mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  className=" mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  key={index}
                >
                  {tech}
                </span>
              ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
