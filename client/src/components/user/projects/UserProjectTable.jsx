import DataTable from "@/components/ui/data-table";
import { userProjectsData } from "@/data/projects";

import { UserProjectColumns } from "./UserProjectColumns";
import AddProject from "@/components/projects/AddProject";

const UserProjectsTable = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-between items-center">
        <div>
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground">  Here&apos;s the list of projects!</p>
        </div>
        <AddProject/>
      </div>
      <DataTable data={userProjectsData} columns={UserProjectColumns} />
    </div>
  );
};

export default UserProjectsTable;
