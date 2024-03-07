import Plus from "@/components/icons/Plus";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/common/FormError";
//import { branches } from "@/data/branches";
//import { userRegister } from "@/redux/authSlice";
import { addProject } from "@/redux/projectSlice";
import { useDispatch, useSelector } from "react-redux";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const AddProject = () => {
  
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state["auth"]);
  const form = useForm();
  const { register, handleSubmit, clearErrors, reset, formState } = form;
  const { errors } = formState;
  
  const [open, setOpen] = useState(false);

  const handleProject = async (data) => {
    try {
      // Create project data object
      const projectData = {
        title: data.title,
        description: data.description,
        repositoryUrl: data.repositoryUrl,
        liveDemoUrl: data.liveDemoUrl,
      };

      // Check if coverImage field exists and has a value
      if (data.coverImage && data.coverImage[0]) {
        projectData.coverImageUrl = data.coverImage[0].url;
      }

      console.log("Project data:", projectData);

      // Dispatch addProject action with projectData
      const response = await dispatch(addProject(projectData));

      // Close the dialog
      setOpen(false);
    } catch (error) {
      // Handle any errors that might occur during the addProject function call
      console.error("Error adding project:", error);
    }
  };

  useEffect(() => {
    reset();
    clearErrors();
  }, [open]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="default">
      <Plus />
      New Project
    </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>New Project</DialogTitle>
      <DialogDescription>
        Enter new project details here.
      </DialogDescription>
    </DialogHeader>

    <form onSubmit={handleSubmit(handleProject)}>
      <div className="grid gap-4">
        <div className="grid items-center gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="title"
            type="text"
            placeholder="Project Name"
            {...register("title", {
              required: "Project name is required",
            })}
            className="col-span-3"
          />
          {errors.name && <FormError message={errors.name.message} />}
        </div>

        <div className="grid items-center gap-3">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Description about the project"
            {...register("description", {
              required: "Description is required",
            })}
            className="col-span-3"
          />
          {errors.description && (
            <FormError message={errors.description.message} />
          )}
        </div>

        <div className="grid items-center gap-3">
          <Label htmlFor="githubLink">Repository Link</Label>
          <Input
            id="repositoryUrl"
            type="url"
            placeholder="GitHub Repository Link"
            {...register("repositoryUrl", {
              required: "GitHub link is required",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/,
                message: "Please enter a valid GitHub link",
              },
            })}
            className="col-span-3"
          />
          {errors.githubLink && (
            <FormError message={errors.githubLink.message} />
          )}
        </div>

        <div className="grid items-center gap-3">
          <Label htmlFor="liveLink">Live URL</Label>
          <Input
            id="liveDemoUrl"
            type="url"
            placeholder="Live Project URL"
            {...register("liveDemoUrl", {
              required: "Live link is required",
              pattern: {
                value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                message: "Please enter a valid URL",
              },
            })}
            className="col-span-3"
          />
          {errors.liveLink && (
            <FormError message={errors.liveLink.message} />
          )}
        </div>

        <div className="grid items-center gap-3">
          <Label htmlFor="coverImage">Banner</Label>
          <Input
            id="coverImage"
            type="file"
            {...register("coverImage")}
            className="col-span-3"

          />
          {errors.coverImage && (
            <FormError message={errors.coverImage.message} />
          )}
        </div>
      </div>

      <DialogFooter>
        <Button className="w-full mt-6" type="submit">
          {isLoading ? (
            <>
              Adding Project
              <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
            </>
          ) : (
            "Add Project"
          )}
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>

    </>
  );
};

export default AddProject;
