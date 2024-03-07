import DataTable from "@/components/ui/data-table";
import MySubmissionColumns from "./MySubmissionColumns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubmissionsByStudent } from "@/redux/submissionSlice";
// get assignment from server by title and populate problems of assignment by title
// also display submission count for each problem

const MySubmissions = () => {
  const dispatch = useDispatch();
  const { submissions } = useSelector((state) => state.submission);
  console.log(submissions);

  useEffect(() => {
    dispatch(getSubmissionsByStudent());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex flex-col justify-between w-full gap-y-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Submissions</h2>
          <p className="text-muted-foreground">
            Your assignments problems submissions!
          </p>
        </div>

        <DataTable columns={MySubmissionColumns} data={submissions} />
      </div>
    </div>
  );
};

export default MySubmissions;
