import DataTable from "@/components/ui/data-table";
import { adminNotesData } from "@/data/notes";
import { PaperColumns } from "./PaperColumns";

const PaperTable = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Papers</h2>
        <p className="text-muted-foreground">Here&apos;s the list of papers!</p>
      </div>

      <DataTable data={adminNotesData} columns={PaperColumns} />
    </div>
  );
};

export default PaperTable;
