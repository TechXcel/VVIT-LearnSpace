import BranchCard from "./BranchCard";
import { branches } from "@/data/branches";

const Branches = () => {
  return (
    <div className="container flex flex-col items-center w-full py-8 gap-y-8 max-w-screen-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Notes</h2>
          <p className="text-muted-foreground">
            These are featured notes, filter by branch!
          </p>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-5 md:grid-cols-4">
        {branches.map((branch, index) => {
          return <BranchCard key={index} branch={branch} />;
        })}
      </div>
    </div>
  );
};

export default Branches;
