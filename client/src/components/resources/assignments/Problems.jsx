import DataTable from "@/components/ui/data-table";
// import { assignments } from "@/data/assignments";
import ProblemsColumns from "./ProblemsColumns";
import { getEachProblemByAssignment } from "@/redux/problemSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

// get assignment from server by title and populate problems of assignment by title
// also display submission count for each problem

const Problems = () => {
  const { assignmentId } = useParams();
  console.log(assignmentId);
  const dispatch = useDispatch();
  const { problems } = useSelector((state) => state.problem);

  useEffect(() => {
    dispatch(getEachProblemByAssignment(assignmentId));
  }, [dispatch, assignmentId]);
  return (
    <div className="container flex flex-col items-center w-full py-8 max-w-screen-2xl">
      <div className="flex flex-col justify-between w-full gap-y-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {problems[0]?.assignmentId?.title}
          </h2>
          <p className="text-muted-foreground">
            {problems[0]?.assignmentId?.description}
          </p>
        </div>

        <DataTable columns={ProblemsColumns} data={problems} />
      </div>
    </div>
  );
};

export default Problems;
