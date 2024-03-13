import DataTable from "@/components/ui/data-table";
//import { adminNotesData } from "@/data/notes";
import { PaperColumns } from "./PaperColumns";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPapers } from "@/redux/resourceSlice";

const PaperTable = () => {
  const dispatch = useDispatch();
  const { papers } = useSelector((state) => state.resource);

  useEffect(() => {
    dispatch(getAllPapers());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Papers</h2>
        <p className="text-muted-foreground">Here&apos;s the list of papers!</p>
      </div>

      <DataTable data={papers} columns={PaperColumns} />
    </div>
  );
};

export default PaperTable;
