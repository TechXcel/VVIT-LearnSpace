/* eslint-disable react/prop-types */
// import Eye from "@/components/icons/Eye";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

// get assignments from server

const AssignmentCard = ({ assignment }) => {
  const slug = assignment.title.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link to={`/assignments/${slug}`}>
      <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span>{assignment.title}</span>
            <Badge variant="secondary" className="ml-2">
              {assignment.viewCount}
            </Badge>
          </CardTitle>
          <CardDescription>{assignment.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-3">
          <div className="flex flex-wrap">
            {assignment.tags.map((tag, index) => (
              <Badge variant="outline" key={index} className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* <CardFooter className="justify-between">
          <div>
            <Label>
              By:{" "}
              <span className="text-sm font-normal">
                Krishna Prasad, Associate Professor
              </span>
            </Label>
          </div>
        </CardFooter> */}
      </Card>
    </Link>
  );
};

export default AssignmentCard;
