import DataTable from "@/components/ui/data-table";
import { facultyNotesData } from "@/data/notes";

import { NoteColumns } from "../notes/NoteColumns";
import AddNotes from "@/components/student/notes/AddNotes";



const FacultyNotesTable = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notes</h2>
          <p className="text-muted-foreground">Here s the list of notes!</p>
        </div>
        <AddNotes />
      </div>
      <DataTable data={facultyNotesData} columns={NoteColumns} />
    </div>
  );
};

export default FacultyNotesTable;
