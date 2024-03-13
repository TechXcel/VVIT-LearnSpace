import DataTable from "@/components/ui/data-table";
//import { facultyProjectsData } from "@/data/projects";

import { getAllProjects } from "@/redux/projectSlice";
import { FacultyProjectColumns } from "./FacultyProjectColumns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FacultyProjectsTable = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(getAllProjects());
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
      </div>
      <DataTable data={projects} columns={FacultyProjectColumns} />
    </div>
  );
};

export default FacultyProjectsTable;
