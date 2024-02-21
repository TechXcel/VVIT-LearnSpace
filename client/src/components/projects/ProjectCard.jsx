/* eslint-disable react/prop-types */
import Eye from "../icons/Eye";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <img
          src={project.coverImage}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
      </CardHeader>

      <CardContent className="flex flex-col gap-y-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2">
            <Eye />
            <p>{project.viewCount}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shaikahmadnawaz.png" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <p>Nawaz</p>
          </div>
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.description.substring(0, 100)}...
        </CardDescription>
        <div className="flex flex-wrap">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 mr-2 text-xs font-semibold rounded-full bg-primary"
            >
              # {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" type="button">
          More Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;