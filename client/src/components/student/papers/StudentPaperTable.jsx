import DataTable from "@/components/ui/data-table";



import { studentPapersData } from "@/data/papers";

import { StudentPapersColumns } from "./StudentPapersColumn";

import AddPaper from "../../faculty/papers/AddPaper"


const StudentPaperTable = () => {
  return (
    <div className="flex flex-col space-y-8">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Papers</h2>
        <p className="text-muted-foreground">
          {" "}
          Here&apos;s the list of  papers!
        </p>
      </div>
      <AddPaper/>
    </div>
    <DataTable data={studentPapersData} columns={StudentPapersColumns} />
  </div>
  );
};

export default StudentPaperTable;
