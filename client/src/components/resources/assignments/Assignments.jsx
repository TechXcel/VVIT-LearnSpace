import AssignmentCard from "./AssignmentCard";
import { assignments } from "@/data/assignments";

const Assignments = () => {
  return (
    <div className="container flex flex-col items-center w-full py-8 gap-y-8 max-w-screen-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Assignments</h2>
          <p className="text-muted-foreground">
            These are featured programming based assignments!
          </p>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 md:grid-cols-4">
        {assignments.map((assignment, index) => {
          return <AssignmentCard key={index} assignment={assignment} />;
        })}
      </div>
    </div>
  );
};

export default Assignments;
