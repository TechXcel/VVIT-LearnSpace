import DataTable from "@/components/ui/data-table";

import { ProjectColumns } from "./ProjectColumns";
//import { adminProjectsData } from "@/data/projects";

import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllProjects } from "@/redux/projectSlice";


const ProjectsTable = () => {

  const dispatch=useDispatch();
  const {projects}=useSelector((state)=>state.projects);
 
  
  useEffect(()=>{
    dispatch(getAllProjects());
  },[dispatch])





  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of projects!
        </p>
      </div>

      <DataTable data={projects} columns={ProjectColumns} />
    </div>
  );
};

export default ProjectsTable;
