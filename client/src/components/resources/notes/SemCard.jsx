/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { useParams } from "react-router-dom";

const SemCard = ({ sem }) => {
  const { branchName } = useParams();

  return (
    <Card className="flex-col max-w-md gap-6 text-white rounded-lg shadow-lg bg-gradient-to-br from-orange-500 to-orange-500 ">
      <Link to={`/notes/${branchName}/${sem.semNumber}`}>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>{sem.year}</div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">{sem.semNumber}</div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default SemCard;
