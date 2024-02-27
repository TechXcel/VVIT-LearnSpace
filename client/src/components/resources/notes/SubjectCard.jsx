/* eslint-disable react/prop-types */

import Eye from "../../icons/Eye";

//import {  useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "../../ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "../../ui/badge";
import { motion } from "framer-motion";
import Download from "@/components/icons/Download";

const SubjectCard = ({ note }) => {
  //const {branchName}=useParams();
  //const {semId}=useParams();
  const download = () => {
    const pdfUrl =
      "https://www.jntuk.edu.in/wp-content/uploads/2019/08/I-Year-CSE-Syllabus-1.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    // <motion.div
    //   initial={{ opacity: 0, scale: 0 }}
    //   animate={{ opacity: 1, scale: 1 }}
    //   exit={{ opacity: 0, scale: 0 }}
    //   transition={{ duration: 1 }}
    // >
    <Card className="w-full h-full transition-all duration-500 ease-in-out border shadow-sm hover:scale-105">
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>{note.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <a
          download
          href="https://www.jntuk.edu.in/wp-content/uploads/2019/08/I-Year-CSE-Syllabus-1.pdf"
          target="_blank"
        >
          <Button>
            <>
              <Download /> Syllabus
            </>
          </Button>
        </a>
        <a
          download
          href="https://www.jntuk.edu.in/wp-content/uploads/2019/08/I-Year-CSE-Syllabus-1.pdf"
          target="_blank"
        >
          <Button>
            <>
              <Download /> Notes
            </>
          </Button>
        </a>
      </CardFooter>
    </Card>
    // </motion.div>
  );
};

export default SubjectCard;
