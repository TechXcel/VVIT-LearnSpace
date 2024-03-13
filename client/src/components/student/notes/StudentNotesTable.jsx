import DataTable from "@/components/ui/data-table";
import { StudentNoteColumns } from "./StudentNoteColumns";

import AddNotes from "./AddNotes";
import { getUserNotes } from "@/redux/resourceSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentNotesTable = () => {
  const dispatch = useDispatch();
  const { resources } = useSelector((state) => state.resource);
  //console.log("notes data", notes)
  useEffect(() => {
    dispatch(getUserNotes());
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
      <DataTable data={resources} columns={StudentNoteColumns} />
    </div>
  );
};

export default StudentNotesTable;
