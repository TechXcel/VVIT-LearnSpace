import DataTable from "@/components/ui/data-table";



//import { studentPapersData } from "@/data/papers";

import { getUserPaper } from "@/redux/resourceSlice";

import { StudentPapersColumns } from "./StudentPapersColumn";

import AddPaper from "./AddPaper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const StudentPaperTable = () => {
  const dispatch = useDispatch();
  const { papers } = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(getUserPaper());
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
    <DataTable data={papers} columns={StudentPapersColumns} />
  </div>
  );
};

export default StudentPaperTable;
