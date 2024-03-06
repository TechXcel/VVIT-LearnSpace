import DataTable from "@/components/ui/data-table";
import { FacultyAssignmentColumns } from "./FacultyAssignmentColumns";
import AddAssignment from "./AddAssignment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssignments } from "@/redux/assignmentSlice";

const FacultyAssignments = () => {
  const dispatch = useDispatch();
  const { assignments } = useSelector((state) => state.assignment);

  useEffect(() => {
    dispatch(getAllAssignments());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Assignments</h2>
          <p className="text-muted-foreground">
            Here&apos;s the list of assignments you added!
          </p>
        </div>
        <AddAssignment />
      </div>

      <DataTable data={assignments} columns={FacultyAssignmentColumns} />
    </div>
  );
};

export default FacultyAssignments;
