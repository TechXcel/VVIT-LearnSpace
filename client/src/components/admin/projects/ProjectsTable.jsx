import DataTable from "@/components/ui/data-table";

import { ProjectColumns } from "./ProjectColumns";
import { adminProjectsData } from "@/data/projects";

const ProjectsTable = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of projects!
        </p>
      </div>

      <DataTable data={adminProjectsData} columns={ProjectColumns} />
    </div>
  );
};

export default ProjectsTable;
