/* eslint-disable react/prop-types */

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import ProjectDialog from "./ProjectDialog";

const ProjectCard = ({ project }) => {
  // Accessing the first element of the array and then splitting
  const tagsArray = project.tags.length > 0 ? project.tags[0].split(",") : [];

  return (
    <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
      <CardHeader>
        <img
          src={project.coverImage}
          alt="Laptop"
          className="h-[200px] w-full rounded-md mb-2 object-cover"
        />

        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div className="flex">
          {tagsArray.map((tag, index) => (
            <Badge key={index} variant="outline" className="mr-2">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <ProjectDialog project={project} />
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
