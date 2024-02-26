import DataTable from "@/components/ui/data-table";
import { userProjectsData } from "@/data/projects";

import { StudentProjectColumns } from "./StudentProjectColumns";
import AddProject from "@/components/projects/AddProject";

const StudentProjectsTable = () => {
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
      <DataTable data={userProjectsData} columns={StudentProjectColumns} />
    </div>
  );
};

export default StudentProjectsTable;
