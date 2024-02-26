/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
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
import { Badge } from "../ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
      <Link to={`/projects/${project.id}`}>
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
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
          {/* <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2">
            <Eye />
            <p>{project.viewCount}</p>
          </div>
        </div> */}
        </CardContent>

        {/* <CardFooter className="justify-between">
        <Link to={`/projects/:projectId`}>
          <Button type="button">More Details</Button>
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
      </CardFooter> */}
      </Link>
    </Card>
  );
};

export default ProjectCard;
