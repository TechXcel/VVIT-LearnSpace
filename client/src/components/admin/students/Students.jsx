// import { students } from "@/data/students";
import DataTable from "../../ui/data-table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StudentColumns } from "@/components/admin/students/StudentColumns";
import { getAllStudents } from "@/redux/userSlice";

const Students = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.user);
  console.log(students);
  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Students</h2>
        <p className="text-muted-foreground">
          Here&apos;s the list of students!
        </p>
      </div>

      <DataTable data={students} columns={StudentColumns} />
    </div>
  );
};

export default Students;
