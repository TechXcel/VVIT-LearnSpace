import DataTable from "@/components/ui/data-table";
import { assignments, problems } from "@/data/assignments";
import ProblemsColumns from "./ProblemsColumns";

const Problems = () => {
  return (
    <div className="container flex flex-col w-full max-w-screen-2xl">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium">{problems[0].assignment}</h2>
          <p>These are featured projects.</p>
        </div>

        <DataTable data={problems} columns={ProblemsColumns} />
      </div>
    </div>
  );
};

export default Problems;
