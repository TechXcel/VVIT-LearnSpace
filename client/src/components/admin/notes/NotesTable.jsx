import DataTable from "@/components/ui/data-table";
import { adminNotesData } from "@/data/notes";
import { NoteColumns } from "./NoteColumns";

const NotesTable = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Notes</h2>
        <p className="text-muted-foreground">Here&apos;s the list of notes!</p>
      </div>

      <DataTable data={adminNotesData} columns={NoteColumns} />
    </div>
  );
};

export default NotesTable;
