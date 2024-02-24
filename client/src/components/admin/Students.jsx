import { studentColumns, students } from "@/data/students"
import DataTable from "../DataTable"
import { payments } from "@/data/payments"
import { columns } from "@/data/columns"

const Students = () => {
  return (
    <div><div className="flex items-center justify-between space-y-2">
    <div>
      <h2 className="text-2xl font-bold tracking-tight">Students</h2>
      <p className="text-muted-foreground">
        Here&apos;s the list of our students!
      </p>
    </div>

    <DataTable data={payments} columns={columns} />
  </div></div>
    
  )
}

export default Students