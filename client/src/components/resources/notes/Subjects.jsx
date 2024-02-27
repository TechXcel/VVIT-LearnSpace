import { notes } from "@/data/notes";
import SubjectCard from "./SubjectCard";
import { useParams } from "react-router-dom";

const Subjects = () => {
  const { branchName } = useParams();
  const { semId } = useParams();

  return (
    <div className="container flex flex-col items-center w-full py-8 gap-y-8 max-w-screen-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight">Subjects </h2>
          <p className="text-muted-foreground">Subjects wise notes.</p>
        </div>
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-5 md:grid-cols-4">
        {notes.map((note, index) => {
          if (note.branch == branchName && note.semester == semId) {
            return <SubjectCard key={index} note={note} />;
          }
        })}
      </div>
    </div>
  );
};

export default Subjects;
