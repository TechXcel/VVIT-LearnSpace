import { assignments } from "@/data/assignments";
import AssignmentCard from "./AssignmentCard";

const Assignments = () => {
  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex items-center justify-between w-full mt-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium">Assignments</h2>
          <p>These are featured assignments.</p>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 mt-8 md:gap-10 md:grid-cols-4">
        {assignments.map((assignment, index) => {
          return <AssignmentCard key={index} assignment={assignment} />;
        })}
      </div>
    </div>
  );
};

export default Assignments;
