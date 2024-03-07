import { FormError } from "@/components/common/FormError";
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
import { MultiSelect } from "@/components/ui/multi-select";
import { Textarea } from "@/components/ui/textarea";
import { addAssignment } from "@/redux/assignmentSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

const AddAssignment = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state["assignment"]);
  const form = useForm();
  const { register, handleSubmit, clearErrors, reset, formState } = form;
  const { errors } = formState;
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAssignmentCreation = async (data) => {
    const assignmentData = new FormData();
    data.tags = selected;
    // Object.keys(data).forEach((key) => {
    //   assignmentData.append(key, data[key]);
    // });

    const response = await dispatch(addAssignment(data));
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
            New Assignment
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Assignment</DialogTitle>
            <DialogDescription>
              Enter new assignment details here.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleAssignmentCreation)}>
            <div className="grid gap-6 py-4">
              <div className="grid items-center gap-3">
                <Label htmlFor="name">Title</Label>
                <Input
                  id="title"
                  placeholder="Assignment name"
                  {...register("title", {
                    required: "Assignment name is required",
                  })}
                  className="col-span-3"
                />
                {errors.title && <FormError message={errors.title.message} />}
              </div>
              <div className="grid items-center gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Write some description about the assignment"
                  {...register("description", {
                    required: "Assignment description is required",
                  })}
                  className="col-span-3"
                />
                {errors.description && (
                  <FormError message={errors.description.message} />
                )}
              </div>
              <div className="grid items-center gap-3">
                <Label htmlFor="name">Categories</Label>
                <MultiSelect
                  options={[
                    {
                      value: "Programming",
                      label: "Programming",
                    },
                    {
                      value: "JavaScript",
                      label: "JavaScript",
                    },
                    {
                      value: "Java",
                      label: "Java",
                    },
                    {
                      value: "Python",
                      label: "Python",
                    },
                    {
                      value: "React",
                      label: "React",
                    },
                  ]}
                  selected={selected}
                  onChange={setSelected}
                  className="col-span-3"
                  title="Select tags"
                />
              </div>
            </div>

            <DialogFooter>
              <Button className="w-full" type="submit">
                {isLoading ? (
                  <>
                    Adding Assignment
                    <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                  </>
                ) : (
                  "Add Assignment"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddAssignment;
