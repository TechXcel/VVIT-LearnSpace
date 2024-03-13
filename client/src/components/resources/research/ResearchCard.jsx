/* eslint-disable react/prop-types */

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../ui/card";
  import { Badge } from "../../ui/badge";
 import ResearchDialog from "./ResearchDialog";
  
  const ResearchCard = ({ research }) => {
    
    return (
      <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
        <CardHeader>
          {/* <img
            src={research.coverImage}
            alt="Laptop"
            className="h-[200px] w-full rounded-md mb-2 object-cover"
          /> */}
  
          <CardTitle>{research.title}</CardTitle>
          <CardDescription>{research.description}</CardDescription>
        </CardHeader>
  
        <CardContent className="flex flex-col">
          <div className="flex">
            {research.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="mr-2">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <ResearchDialog research={research} />
        </CardFooter>
      </Card>
    );
  };
  
  export default ResearchCard;
  