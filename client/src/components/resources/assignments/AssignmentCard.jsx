/* eslint-disable react/prop-types */
// import Eye from "@/components/icons/Eye";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
  const slug = assignment.title.toLowerCase().replace(/\s+/g, "-");
  return (
    <Card className="w-[350px] h-full">
      <CardHeader>
        <CardTitle>{assignment.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-y-3">
        {/* <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2">
            <Eye />
            <p>{assignment.viewCount}</p>
          </div>
        </div> */}

        <CardDescription>
          {assignment.description.substring(0, 100)}...
        </CardDescription>
        <div className="flex flex-wrap">
          {assignment.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 mr-2 text-xs font-semibold rounded-full bg-primary"
            >
              # {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="justify-between">
        <Link to={`/assignments/${slug}`}>
          <Button type="button">View Assignment</Button>
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shaikahmadnawaz.png" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base">Nawaz</p>
            <p className="text-sm">20BQ1A05L5</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AssignmentCard;
