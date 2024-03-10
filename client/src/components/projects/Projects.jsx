import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getApprovedProjects } from "@/redux/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getApprovedProjects());
  }, [dispatch]);
  return (
    <div className="container flex flex-col items-center w-full py-8 gap-y-8 max-w-screen-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">These are featured projects!</p>
        </div>
      </div>

      <div className="grid items-center justify-center w-full grid-cols-1 gap-5 md:grid-cols-4">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
