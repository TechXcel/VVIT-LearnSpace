import DataTable from "@/components/ui/data-table";
import { facultyProjectsData } from "@/data/projects";

import { ProjectColumns } from "../../admin/projects/ProjectColumns";
import { FacultyProjectColumns } from "./FacultyProjectColumns";

const FacultyProjectsTable = () => {
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
      <DataTable data={facultyProjectsData} columns={FacultyProjectColumns} />
    </div>
  );
};

export default FacultyProjectsTable;
