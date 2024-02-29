import DataTable from "@/components/ui/data-table";



import { facultyResearchData } from "@/data/researchPaper";

import { FacultyResearchColumns } from "./FacultyResearchColumns";
import AddResearch from "./AddResearch";



const FacultyResearchTable = () => {
  return (
    <div className="flex flex-col space-y-8">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Research Papers</h2>
        <p className="text-muted-foreground">
          {" "}
          Here&apos;s the list of research papers!
        </p>
      </div>
      <AddResearch/>
    </div>
    <DataTable data={facultyResearchData} columns={FacultyResearchColumns} />
  </div>
  );
};

export default FacultyResearchTable;
