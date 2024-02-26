/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader
 
} from "../../ui/card";
import { motion } from "framer-motion";

const BranchCard = ({branch}) => {
  
  
    return (

        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
       
    >
      <Card className="max-w-md bg-gradient-to-tr from-orange-500  to-orange-500 text-white flex-col gap-6 rounded-lg shadow-lg">
        <Link to={`/papers/${branch.title}`}>
         
            <CardHeader className="flex items-center justify-between flex-row ">
            <div> 
                {branch.title}
            </div>
            
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="space-y-1">

            {branch.desc}
            
            </div>
            
            
            </CardContent>
        </Link>
      </Card>
      </motion.div>
    )
  }
  
export default BranchCard;
