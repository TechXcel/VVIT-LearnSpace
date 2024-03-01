/* eslint-disable react/prop-types */
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const RoadmapCard = ({ roadmap }) => {
  return (
    <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
      <Link to={`/roadmaps/${roadmap.path}`}>
        <CardHeader className="flex flex-col">
          <CardTitle>{roadmap.title}</CardTitle>
          <CardDescription>{roadmap.desc}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default RoadmapCard;
