import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getApprovedResearch } from "@/redux/resourceSlice";
import ResearchCard from "./ResearchCard";

const Research = () => {
  const dispatch = useDispatch();
  const { research } = useSelector((state) => state.resource);
  
  useEffect(() => {
    dispatch(getApprovedResearch());
  }, [dispatch]);
  return (
    <div className="container flex flex-col items-center w-full py-8 gap-y-8 max-w-screen-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Research</h2>
          <p className="text-muted-foreground">These are featured research papers!</p>
        </div>
      </div>

      <div className="grid items-center justify-center w-full grid-cols-1 gap-5 md:grid-cols-4">
        {research.map((researchpaper, index) => {
          return <ResearchCard key={index} research={researchpaper} />;
        })}
      </div>
    </div>
  );
};

export default Research;
