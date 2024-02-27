// import DataTable from "@/components/ui/data-table";

import Plus from "@/components/icons/Plus";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { assignments } from "@/data/assignments";
import { FacultyAssignmentColumns } from "./FacultyAssignmentColumns";
import AddAssignment from "./AddAssignment";

const FacultyAssignments = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Assignments</h2>
          <p className="text-muted-foreground">
            Here&apos;s the list of assignments you added!
          </p>
        </div>
        <AddAssignment />
      </div>

      <DataTable data={assignments} columns={FacultyAssignmentColumns} />
    </div>
  );
};

export default FacultyAssignments;
