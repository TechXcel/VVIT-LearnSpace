/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader
  
 
} from "../../ui/card";
import { useParams } from 'react-router-dom';

const SemCard = ({sem}) => {
    const {branchName}=useParams();

    return (
      <Card className="max-w-md bg-gradient-to-tr from-orange-500  to-orange-500 text-white flex-col gap-6 rounded-lg shadow-lg ">
        <Link to={`/papers/${branchName}/${sem.semNumber}`}>
         
            <CardHeader className="flex items-center justify-between flex-row">
            <div> 
                {sem.year}
            </div>
            
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="space-y-1">

            {sem.semNumber}
            </div>
            
            
            </CardContent>
        </Link>
      </Card>
    )
  }
  
export default SemCard;
