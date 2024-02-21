import Plus from "../icons/Plus";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
// const animatedComponents = makeAnimated();

const AddProject = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">
            <Plus />
            <span className="ml-1 text-lg font-semibold">Add Project</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
            <DialogDescription>
              Enter your project details here.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="name"
                placeholder="Project title"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Textarea
                id="username"
                placeholder="Write some description about your project"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Repository
              </Label>
              <Input
                id="name"
                placeholder="GitHub repository URL"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Live URL
              </Label>
              <Input
                id="name"
                placeholder="Live project URL"
                className="col-span-3"
              />
            </div>
            {/* <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Live URL
              </Label>
              <Select
                options={options}
                className="col-span-3"
                placeholder="Select your project type"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
              />
            </div> */}
          </div>

          <DialogFooter>
            <Button type="submit">Save Project</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProject;
