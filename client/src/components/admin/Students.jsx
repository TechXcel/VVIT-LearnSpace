import DataTable from "../ui/data-table";
import { payments } from "@/data/payments";
import { columns } from "@/data/columns";

const Students = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Students</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of our students!
        </p>
      </div>

      <DataTable data={payments} columns={columns} />
    </div>
  );
};

export default Students;
