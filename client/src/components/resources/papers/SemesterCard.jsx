/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { useParams } from "react-router-dom";

const SemesterCard = ({ sem }) => {
  const { branchName } = useParams();

  return (
    <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
      <Link to={`/papers/${branchName}/${sem.semNumber}`}>
        <CardHeader className="flex flex-col">
          <CardTitle>Semester {sem.semNumber}</CardTitle>
          <CardDescription>{sem.year}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default SemesterCard;
