import { projects } from "@/data/projects";
import AddProject from "./AddProject";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex items-center justify-between w-full mt-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium">Projects</h2>
          <p>These are featured projects.</p>
        </div>
        <AddProject />
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 mt-8 md:gap-10 md:grid-cols-4">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
