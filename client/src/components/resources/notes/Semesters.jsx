import { sems } from "@/data/sems";
import SemCard from "./SemesterCard";

const Semesters = () => {
  return (
    <div className="container flex flex-col items-center w-full py-8 gap-y-8 max-w-screen-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Semesters</h2>
          <p className="text-muted-foreground">Filter notes by semester.</p>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-5 md:grid-cols-4">
        {sems.map((sem, index) => {
          return <SemCard key={index} sem={sem} />;
        })}
      </div>
    </div>
  );
};

export default Semesters;
