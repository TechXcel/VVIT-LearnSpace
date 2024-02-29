import DataTable from "@/components/ui/data-table";



import { studentResearchData } from "@/data/researchPaper";
import { StudentResearchColumns } from "./StudentResearchColumns";



import AddResearch from "@/components/faculty/research/AddResearch";



const StudentResearchTable = () => {
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
    <DataTable data={studentResearchData} columns={StudentResearchColumns} />
  </div>
  );
};

export default StudentResearchTable;
