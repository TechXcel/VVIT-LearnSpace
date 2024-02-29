import DataTable from "@/components/ui/data-table";


import { facultyPapersData } from "@/data/papers";
import { FacultyPapersColumns } from "./FacultyPapersColumns";
import AddPaper from "./AddPaper";


const FacultyPapersTable = () => {
  return (
    <div className="flex flex-col space-y-8">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Papers</h2>
        <p className="text-muted-foreground">
          {" "}
          Here&apos;s the list of papers!
        </p>
      </div>
      <AddPaper />
    </div>
    <DataTable data={facultyPapersData} columns={FacultyPapersColumns} />
  </div>
  );
};

export default FacultyPapersTable;
