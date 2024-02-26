import DataTable from "@/components/ui/data-table";

import { FacultyColumns } from "./FacultyColumns";
import { faculty } from "@/data/Faculty";

const Faculty = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Faculty</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of faculty!
        </p>
      </div>

      <DataTable data={faculty} columns={FacultyColumns} />
    </div>
  );
};

export default Faculty;
