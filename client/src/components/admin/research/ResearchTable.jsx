import DataTable from "@/components/ui/data-table";

//import { researchData } from "@/data/researchPaper";

import { ResearchColumns } from "./ResearchColumns";
import { getAllResearchPapers } from "@/redux/resourceSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const ResearchTable = () => {
  const dispatch = useDispatch();
  const { research } = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(getAllResearchPapers());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Research Papers</h2>
        <p className="text-muted-foreground">Here&apos;s the list of papers!</p>
      </div>

      <DataTable data={research} columns={ResearchColumns} />
    </div>
  );
};

export default ResearchTable;
