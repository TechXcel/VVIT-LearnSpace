import DataTable from "@/components/ui/data-table";
import { assignments } from "@/data/assignments";
import { FacultyProblemColumns } from "./FacultyProblemColumns";
import AddProblem from "./AddProblem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProblemsByAssignment } from "@/redux/problemSlice";
import { useParams } from "react-router-dom";

const FacultyProblems = () => {
  const { assignmentId } = useParams();
  console.log(assignmentId);
  const dispatch = useDispatch();
  const { problems } = useSelector((state) => state.problem);

  useEffect(() => {
    dispatch(getProblemsByAssignment(assignmentId));
  }, [dispatch, assignmentId]);
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex flex-col justify-between w-full gap-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {assignments[0].title}
            </h2>
            <p className="text-muted-foreground">
              {assignments[0].description}
            </p>
          </div>
          <AddProblem assignmentId={assignmentId} />
        </div>

        <DataTable columns={FacultyProblemColumns} data={problems} />
      </div>
    </div>
  );
};

export default FacultyProblems;
