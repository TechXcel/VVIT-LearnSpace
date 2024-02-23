import BranchCard from "./BranchCard";
import { branches } from "@/data/branches";

const Branches = () => {
  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex items-center justify-between w-full mt-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium">Branches </h2>
          <p>Branches List.</p>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 mt-8 md:gap-10 md:grid-cols-4">
        {branches.map((branch, index) => {
          return <BranchCard key={index} branch={branch} />;
        })}
      </div>
    </div>
  );
};

export default Branches;
