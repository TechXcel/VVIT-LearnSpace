import { roadmaps } from "@/data/roadmaps";
import RoadmapCard from "./RoadmapCard";

const Roadmaps = () => {
  return (
    <div className="container flex flex-col items-center w-full py-8 gap-y-8 max-w-screen-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Roadmaps</h2>
          <p className="text-muted-foreground">
            These are featured roadmaps, filtered by domain.
          </p>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-5 md:grid-cols-4">
        {roadmaps.map((roadmap, index) => {
          return <RoadmapCard key={index} roadmap={roadmap} />;
        })}
      </div>
    </div>
  );
};

export default Roadmaps;
