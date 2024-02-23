import { sems } from "@/data/sems";
import SemCard from "./SemCard";


const Sems =()=> {
  
  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <div className="flex items-center justify-between w-full mt-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium">Semesters </h2>
          <p>Sem List.</p>
        </div>
       
      </div>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-4 mt-8 md:gap-10 md:grid-cols-4">
          
      {sems.map((sem, index) => {
          
          return <SemCard key={index} sem={sem} />;
        })}
        
      </div>
    </div>
  )
}

export default Sems;
