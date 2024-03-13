import DataTable from "@/components/ui/data-table";
import { FacultyNoteColumns } from "./FacultyNoteColumns";

import AddNotes from "../../student/notes/AddNotes"
import { getAllNotes } from "@/redux/resourceSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FacultyNotesTable = () => {
  const dispatch = useDispatch();
  const { resources } = useSelector((state) => state.resource);
  //console.log("notes data", notes)
  useEffect(() => {
    dispatch(getAllNotes());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notes</h2>
          <p className="text-muted-foreground">Here s the list of notes!</p>
        </div>
        <AddNotes />
      </div>
      <DataTable data={resources} columns={FacultyNoteColumns} />
    </div>
  );
};

export default FacultyNotesTable;
