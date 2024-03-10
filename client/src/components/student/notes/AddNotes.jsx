import Plus from "@/components/icons/Plus";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Loader2 } from "lucide-react";

import { Textarea } from "../../ui/textarea";
import { MultiSelect } from "@/components/ui/multi-select";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/common/FormError";
import { useDispatch, useSelector } from "react-redux";

import { addNotes } from "@/redux/resourceSlice";
import { ScrollArea } from "@/components/ui/scroll-area";

const AddNotes = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state["auth"]);
  const form = useForm();
  const { register, handleSubmit, clearErrors, reset, formState } = form;
  const { errors } = formState;
  const [selected, setSelected] = useState([]);

  const [open, setOpen] = useState(false);

  const handleNotes = async (data) => {
    const notesData = new FormData();
    data.role = "student";
    data.tags = selected;
    data.type = "lectureNote";
    console.log("fileUrl", data.fileUrl[0]);
    notesData.append("fileUrl", data.fileUrl[0]);
    Object.keys(data).forEach((key) => {
      if (key !== "fileUrl") {
        notesData.append(key, data[key]);
      }
    });
    console.log("this is notes data", notesData.title);
    await dispatch(addNotes(notesData));
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
            New Notes
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] w-[330px] md:w-full">
          <ScrollArea className="h-[80vh]">
            <DialogHeader>
              <DialogTitle>New Notes</DialogTitle>
              <DialogDescription>
                Enter new notes details here.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleNotes)}>
              <div className="grid gap-6 py-4">
                <div className="grid items-center gap-2">
                  <Label htmlFor="name">Title</Label>
                  <Input
                    id="title"
                    placeholder="Notes name"
                    {...register("title", {
                      required: "notes name is required",
                    })}
                    className="col-span-3"
                  />
                  {errors.name && <FormError message={errors.name.message} />}
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Write some description about the notes"
                    {...register("description", {
                      required: "description is required",
                    })}
                    className="col-span-3"
                  />
                  {errors.name && <FormError message={errors.name.message} />}
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="notes">Branch</Label>
                  <Input
                    id="branch"
                    placeholder="Select the branch of the notes"
                    {...register("branch", {
                      required: "Branch is required",
                    })}
                    className="col-span-3"
                  />
                  {errors.name && <FormError message={errors.name.message} />}
                </div>

                <div className="grid items-center gap-2">
                  <Label htmlFor="notes">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="subject name"
                    {...register("subject", {
                      required: "Subject name required",
                    })}
                    className="col-span-3"
                  />
                  {errors.name && <FormError message={errors.name.message} />}
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Input
                    id="semester"
                    placeholder="Semester number"
                    {...register("semester", {
                      required: "Semester number required",
                      pattern: {
                        value: /^[1-8]$/,
                        message: "Semester number must be between 1 and 8",
                      },
                    })}
                    className="col-span-3"
                  />
                  {errors.name && <FormError message={errors.name.message} />}
                </div>
                <div className="grid items-center gap-3">
                  <Label htmlFor="name">Tags</Label>
                  <MultiSelect
                    options={[
                      {
                        value: "CSE",
                        label: "CSE",
                      },
                      {
                        value: "ECE",
                        label: "ECE",
                      },
                      {
                        value: "IT",
                        label: "IT",
                      },
                      {
                        value: "CIVIL",
                        label: "CIVIL",
                      },
                      {
                        value: "MECH",
                        label: "MECH",
                      },
                    ]}
                    selected={selected}
                    onChange={setSelected}
                    className="col-span-3"
                    title="Select tags"
                  />
                </div>

                <div className="grid items-center gap-2">
                  <Label htmlFor="notes">File</Label>
                  <Input
                    id="link"
                    type="file"
                    placeholder="Notes"
                    {...register("fileUrl")}
                    className="col-span-3"
                  />
                  {errors.name && <FormError message={errors.name.message} />}
                </div>
              </div>

              <DialogFooter>
                <Button className="w-full mt-6" type="submit">
                  {isLoading ? (
                    <>
                      Adding Notes
                      <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                    </>
                  ) : (
                    "Add Notes"
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

export default AddNotes;
