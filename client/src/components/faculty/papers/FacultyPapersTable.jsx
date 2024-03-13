import DataTable from "@/components/ui/data-table";



//import { studentPapersData } from "@/data/papers";

import { getAllPapers } from "@/redux/resourceSlice";

import { FacultyPapersColumns } from "./FacultyPapersColumns";

import AddPaper from "../../student/papers/AddPaper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



const FacultyPaperTable = () => {
  const dispatch = useDispatch();
  const { papers } = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(getAllPapers());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Papers</h2>
        <p className="text-muted-foreground">
          {" "}
          Here&apos;s the list of  papers!
        </p>
      </div>
      <AddPaper/>
    </div>
    <DataTable data={papers} columns={FacultyPapersColumns} />
  </div>
  );
};

export default FacultyPaperTable;
