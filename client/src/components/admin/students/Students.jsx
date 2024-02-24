import { students } from "@/data/students";
import DataTable from "../../ui/data-table";

import { columns } from "@/components/admin/students/StudentColumns";

const Students = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Students</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of students!
        </p>
      </div>

      <DataTable data={students} columns={columns} />
    </div>
  );
};

export default Students;
