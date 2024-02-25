/* eslint-disable react/prop-types */

import Eye from "../../icons/Eye";

//import {  useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  
  CardTitle,
  CardFooter
} from "../../ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "../../ui/badge";
import { motion } from "framer-motion";


const SubjectCard = ({ note }) => {
    //const {branchName}=useParams();
    //const {semId}=useParams();
    const download=()=>{
        const pdfUrl = "https://www.jntuk.edu.in/wp-content/uploads/2019/08/I-Year-CSE-Syllabus-1.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

  return (

    <motion.div
    initial={{ opacity: 0, scale:0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: 1 }}
   
   >
    <Card className="w-[350px]">
      
       <CardTitle  className="p-10">
        {note.title}</CardTitle>

      <CardContent className="flex flex-col gap-y-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-2">
            <Eye />
            <p>{note.viewCount}</p>

          </div>
        </div>
       
        <CardDescription>
          {note.description.substring(0, 100)}
        </CardDescription>
        <div className="flex space-x-2">
        <Badge className={note.status === 'pending' ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}>{note.status}</Badge>
         
        </div>
             {/*
            <div className="flex flex-wrap">
            {note.tags.map((tag, index) => (
                <span
                key={index}
                className="inline-block px-3 py-1 mr-2 mb-3 text-xs font-semibold rounded-full bg-primary"
                >
                # {tag}
                </span>
            ))}
            </div>
            */}
      </CardContent>
      <CardFooter className=" justify-center">

          <Button type="button" onClick={download}>Download Paper</Button>
      

      </CardFooter>
      
    </Card>
    </motion.div>
  );
};

export default SubjectCard;
