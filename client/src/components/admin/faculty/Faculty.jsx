import DataTable from "@/components/ui/data-table";

import { FacultyColumns } from "./FacultyColumns";
//import { faculty } from "@/data/faculty";
import AddFaculty from "./AddFaculty";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllFaculty } from "@/redux/userSlice";

const Faculty = () => {
  
  const dispatch=useDispatch();
  const {faculty}=useSelector((state)=>state.user);
  console.log(faculty);
  useEffect(()=>{
    dispatch(getAllFaculty());
  },[dispatch])

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Faculty</h2>
          <p className="text-muted-foreground">
            Here&apos;s the list of faculty!
          </p>
        </div>
        <AddFaculty />
      </div>
    {console.log(faculty)}
      <DataTable data={faculty} columns={FacultyColumns} />
    </div>
  );
};

export default Faculty;
