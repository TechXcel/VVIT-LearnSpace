import DataTable from "@/components/ui/data-table";
import { submissions } from "@/data/assignments";
import { StudentSubmissionsColumns } from "./StudentSubmissionsColumns";

const StudentsSubmissions = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight">Submissions</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of submissions!
        </p>
      </div>

      <DataTable data={submissions} columns={StudentSubmissionsColumns} />
    </div>
  );
};

export default StudentsSubmissions;
