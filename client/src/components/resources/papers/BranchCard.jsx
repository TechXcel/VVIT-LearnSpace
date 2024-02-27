/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { motion } from "framer-motion";

const BranchCard = ({ branch }) => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   exit={{ opacity: 0, scale: 0 }}
    //   transition={{ duration: 1 }}
    // >

    <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
      <Link to={`/papers/${branch.title}`}>
        <CardHeader className="flex flex-col">
          <CardTitle>{branch.title}</CardTitle>
          <CardDescription>{branch.desc}</CardDescription>
        </CardHeader>
      </Link>
    </Card>

    // </motion.div>
  );
};

export default BranchCard;
