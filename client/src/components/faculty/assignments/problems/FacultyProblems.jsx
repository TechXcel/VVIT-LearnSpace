import Plus from "@/components/icons/Plus";

import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { assignments, problems } from "@/data/assignments";
import { FacultyProblemColumns } from "./FacultyProblemColumns";

const FacultyProblems = () => {
  return (
    <div className="container flex flex-col items-center w-full py-8 max-w-screen-2xl">
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
          <Button>
            <>
              <Plus /> New Problem
            </>
          </Button>
        </div>

        <DataTable columns={FacultyProblemColumns} data={problems} />
      </div>
    </div>
  );
};

export default FacultyProblems;
