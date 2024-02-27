import Plus from "@/components/icons/Plus";

import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { assignments, problems } from "@/data/assignments";
import { FacultyProblemColumns } from "./FacultyProblemColumns";
import AddProblem from "./AddProblem";

const FacultyProblems = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex flex-col justify-between w-full gap-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {assignments[0].title}
            </h2>
            <p className="text-muted-foreground">
              {assignments[0].description}
            </p>
          </div>
          <AddProblem />
        </div>

        <DataTable columns={FacultyProblemColumns} data={problems} />
      </div>
    </div>
  );
};

export default FacultyProblems;
