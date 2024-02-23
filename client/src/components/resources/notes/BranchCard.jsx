/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { motion } from "framer-motion";

const BranchCard = ({ branch }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 2.5 }}
    >
      <Card className="flex-col max-w-md gap-6 text-black rounded-lg shadow-lg bg-gradient-to-br from-orange-200 via-orange-200 to-orange-300">
        <Link to={`/notes/${branch.title}`}>
          <CardHeader className="flex flex-row items-center justify-between ">
            <div>{branch.title}</div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">{branch.desc}</div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
};

export default BranchCard;
