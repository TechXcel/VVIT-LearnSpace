import DataTable from "@/components/ui/data-table";

//import { studentResearchData } from "@/data/researchPaper";
import { StudentResearchColumns } from "./StudentResearchColumns";

import { getUserResearchPapers } from "@/redux/resourceSlice";


import AddResearchPaper from "./AddResearchPaper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const StudentResearchTable = () => {
  const dispatch = useDispatch();
  const { research } = useSelector((state) => state.resource);
  console.log(research)
  useEffect(() => {
    dispatch(getUserResearchPapers());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Research Papers</h2>
        <p className="text-muted-foreground">
          {" "}
          Here&apos;s the list of research papers!
        </p>
      </div>
      <AddResearchPaper/>
    </div>
    <DataTable data={research} columns={StudentResearchColumns} />
  </div>
  );
};

export default StudentResearchTable;
