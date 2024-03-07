import DataTable from "@/components/ui/data-table";
// import { adminNotesData } from "@/data/notes";
import { NoteColumns } from "./NoteColumns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotes } from "@/redux/resourceSlice";

const NotesTable = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Notes</h2>
        <p className="text-muted-foreground">Here&apos;s the list of notes!</p>
      </div>

      <DataTable data={notes} columns={NoteColumns} />
    </div>
  );
};

export default NotesTable;
