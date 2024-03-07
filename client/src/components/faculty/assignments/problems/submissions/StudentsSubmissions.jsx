import DataTable from "@/components/ui/data-table";
import { submissions } from "@/data/assignments";
import { StudentSubmissionsColumns } from "./StudentSubmissionsColumns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubmissionsByProblem } from "@/redux/submissionSlice";

const StudentsSubmissions = () => {
  const { problemId } = useParams();
  console.log(problemId);
  const dispatch = useDispatch();
  const { submissions } = useSelector((state) => state.submission);
  console.log(submissions);

  useEffect(() => {
    dispatch(getSubmissionsByProblem(problemId));
  }, [dispatch, problemId]);
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight">Submissions</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of submissions!
        </p>
      </div>

      <DataTable data={submissions} columns={StudentSubmissionsColumns} />
    </div>
  );
};

export default StudentsSubmissions;
