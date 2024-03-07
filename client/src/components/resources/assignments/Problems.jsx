import DataTable from "@/components/ui/data-table";
import { assignments, problems } from "@/data/assignments";
import ProblemsColumns from "./ProblemsColumns";

// get assignment from server by title and populate problems of assignment by title
// also display submission count for each problem

const Problems = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex flex-col justify-between w-full gap-y-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {assignments[0].title}
          </h2>
          <p className="text-muted-foreground">{assignments[0].description}</p>
        </div>

        <DataTable columns={ProblemsColumns} data={problems} />
      </div>
    </div>
  );
};

export default Problems;
