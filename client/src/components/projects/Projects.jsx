import { projects } from "@/data/projects";
import AddProject from "./AddProject";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex items-center justify-between w-full mt-8">
        <h2 className="text-xl font-medium">Projects</h2>
        <AddProject />
      </div>
      <div className="grid items-center justify-center w-full grid-cols-4 gap-10 mx-auto mt-8">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
