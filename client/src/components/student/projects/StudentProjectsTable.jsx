import DataTable from "@/components/ui/data-table";
//import { userProjectsData } from "@/data/projects";
import { getUserProjects } from "@/redux/projectSlice";

import { StudentProjectColumns } from "./StudentProjectColumns";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProject from "./AddProject";

const StudentProjectsTable = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);
  console.log("projects array", projects);
  useEffect(() => {
    dispatch(getUserProjects());
  }, [dispatch]);

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">
            {" "}
            Here&apos;s the list of projects!
          </p>
        </div>
        <AddProject />
      </div>
      {console.log("data for student column", projects)}
      <DataTable data={projects} columns={StudentProjectColumns} />
    </div>
  );
};

export default StudentProjectsTable;
