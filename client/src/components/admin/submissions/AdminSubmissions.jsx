import DataTable from "@/components/ui/data-table";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEverySubmission } from "@/redux/submissionSlice";
import { AdminSubmissionColumns } from "./AdminSubmissionColumns";

const AdminSubmissions = () => {
  const dispatch = useDispatch();
  const { submissions } = useSelector((state) => state.submission);
  console.log(submissions);

  useEffect(() => {
    dispatch(getEverySubmission());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold tracking-tight">Submissions</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of submissions!
        </p>
      </div>

      <DataTable data={submissions} columns={AdminSubmissionColumns} />
    </div>
  );
};

export default AdminSubmissions;
