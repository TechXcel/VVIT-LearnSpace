import { papers } from "@/data/papers";
import SubjectCard from "./SubjectCard";
import { useParams } from "react-router-dom";

const ViewSubjects =()=> {
   
  const {branchName}=useParams();
  const {semId}=useParams();
  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex items-center justify-between w-full mt-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium">Subjects </h2>
          <p>Subjects List.</p>
        </div>
       
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 mt-8 md:gap-10 md:grid-cols-4">
          
      {papers.map((note, index) => {
          if (note.branch==branchName && note.semester==semId ){
            return <SubjectCard key={index} note={note} />;
          }
          
        })
      }
 
      </div>
    </div>
  )
  }
  
  export default ViewSubjects;
  