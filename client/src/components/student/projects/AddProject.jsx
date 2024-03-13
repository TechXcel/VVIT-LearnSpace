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

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/common/FormError";
import { addProject } from "@/redux/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect } from "@/components/ui/multi-select";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

const AddProject = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state["project"]);
  const form = useForm();
  const { register, handleSubmit, clearErrors, reset, formState } = form;
  const { errors } = formState;
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAddProject = async (data) => {
    const projectData = new FormData();
    data.tags = selected;
    console.log("cover image in handleProject", data.coverImage[0]);
    projectData.append("coverImage", data.coverImage[0]);
    Object.keys(data).forEach((key) => {
      if (key !== "coverImage") {
        projectData.append(key, data[key]);
      }
    });
    console.log(data);
    await dispatch(addProject(projectData));
    setOpen(false);
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
        <DialogContent className="sm:max-w-[425px] w-[330px] md:w-full">
          <ScrollArea className="h-[80vh]">
            <DialogHeader>
              <DialogTitle>New Project</DialogTitle>
              <DialogDescription>
                Enter new project details here.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleAddProject)}>
              <div className="grid gap-6 py-6">
                <div className="grid items-center gap-2">
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
                  {errors.title && <FormError message={errors.title.message} />}
                </div>

                <div className="grid items-center gap-2">
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

                <div className="grid items-center gap-2">
                  <Label htmlFor="repositoryUrl">Repository Link</Label>
                  <Input
                    id="repositoryUrl"
                    type="text"
                    placeholder="GitHub Repository Link"
                    {...register("repositoryUrl", {
                      required: "GitHub link is required",
                      pattern: {
                        value:
                          /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/,
                        message: "Please enter a valid GitHub link",
                      },
                    })}
                    className="col-span-3"
                  />
                  {errors.repositoryUrl && (
                    <FormError message={errors.repositoryUrl.message} />
                  )}
                </div>

                <div className="grid items-center gap-2">
                  <Label htmlFor="liveDemoUrl">Live URL</Label>
                  <Input
                    id="liveDemoUrl"
                    type="text"
                    placeholder="Live Project URL"
                    {...register("liveDemoUrl", {
                      required: "Live link is required",
                      pattern: {
                        value:
                          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                        message: "Please enter a valid URL",
                      },
                    })}
                    className="col-span-3"
                  />
                  {errors.liveDemoUrl && (
                    <FormError message={errors.liveDemoUrl.message} />
                  )}
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="tags">Tags</Label>
                  <MultiSelect
                    options={[
                      {
                        value: "MERN",
                        label: "MERN",
                      },
                      {
                        value: "React",
                        label: "React",
                      },
                      {
                        value: "Java",
                        label: "Java",
                      },
                      {
                        value: "ML",
                        label: "ML",
                      },
                      {
                        value: "Django",
                        label: "Django",
                      },
                    ]}
                    selected={selected}
                    onChange={setSelected}
                    className="col-span-3"
                    title="Select project tags"
                  />
                </div>

                <div className="grid items-center gap-2">
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
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProject;
