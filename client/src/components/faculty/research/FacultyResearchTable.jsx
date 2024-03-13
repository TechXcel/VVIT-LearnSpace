import DataTable from "@/components/ui/data-table";

//import { studentResearchData } from "@/data/researchPaper";
//import { StudentResearchColumns } from "./StudentResearchColumns";

import { getAllResearchPapers } from "@/redux/resourceSlice";


import AddResearchPaper from "../../student/research/AddResearchPaper"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FacultyResearchColumns } from "./FacultyResearchColumns";



const FacultyResearchTable = () => {
  const dispatch = useDispatch();
  const { research } = useSelector((state) => state.resource);
  console.log(research)
  useEffect(() => {
    dispatch(getAllResearchPapers());
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
    <DataTable data={research} columns={FacultyResearchColumns} />
  </div>
  );
};

export default FacultyResearchTable;
