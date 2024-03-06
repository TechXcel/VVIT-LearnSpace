/* eslint-disable react/prop-types */
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { addProblem } from "@/redux/problemSlice";

const AddProblem = ({ assignmentId }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state["problem"]);
  const form = useForm();
  const { register, handleSubmit, clearErrors, reset, formState } = form;
  const { errors } = formState;
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState("Easy");

  const handleProblemCreation = async (data) => {
    const problemData = new FormData();
    data.assignmentId = assignmentId;
    data.difficulty = level;
    Object.keys(data).forEach((key) => {
      problemData.append(key, data[key]);
    });

    for (const [key, value] of problemData.entries()) {
      console.log(key, value);
    }

    const response = await dispatch(addProblem(problemData));
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
            New Problem
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Problem</DialogTitle>
            <DialogDescription>
              Enter new problem details here.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleProblemCreation)}>
            <div className="grid gap-6 py-4">
              <div className="grid items-center gap-3">
                <Label htmlFor="name">Title</Label>
                <Input
                  id="title"
                  placeholder="Problem name"
                  {...register("title", {
                    required: "Problem name is required",
                  })}
                  className="col-span-3"
                />
                {errors.title && <FormError message={errors.title.message} />}
              </div>
              <div className="grid items-center gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Write some description about the problem"
                  {...register("description", {
                    required: "Problem description is required",
                  })}
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center gap-3">
                <Label htmlFor="name">Difficulty</Label>
                <Select required={true} onValueChange={(e) => setLevel(e)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                {isLoading ? (
                  <>
                    Adding Problem
                    <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                  </>
                ) : (
                  "Save Problem"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProblem;
