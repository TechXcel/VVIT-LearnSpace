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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { notesSelection, semesters } from "@/data/notesSelection";

const AddNotes = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state["auth"]);
  const form = useForm();
  const { register, handleSubmit, clearErrors, reset, formState } = form;
  const { errors } = formState;
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [open, setOpen] = useState(false);

  const handleNotes = async (data) => {
    const notesData = new FormData();
    data.type = "lectureNote";
    data.branch = branch;
    data.subject = subject;
    data.semester = semester;

    notesData.append("fileUrl", data.fileUrl[0]);
    Object.keys(data).forEach((key) => {
      if (key !== "fileUrl") {
        notesData.append(key, data[key]);
      }
    });
    await dispatch(addNotes(notesData));
    setOpen(false);
  };

  const handleBranchChange = (selectedBranch) => {
    const selectedBranchData = notesSelection.find(
      (branchData) => branchData.branch === selectedBranch
    );

    if (selectedBranchData) {
      setSubject(selectedBranchData.subjects[0]);
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
                      required: "Notes name is required",
                    })}
                    className="col-span-3"
                  />
                  {errors.title && <FormError message={errors.title.message} />}
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Write some description about the notes"
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
                  <Label htmlFor="branch">Branch</Label>
                  <Select
                    required={true}
                    onValueChange={(e) => {
                      setBranch(e);
                      handleBranchChange(e);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {notesSelection.map((branchData, index) => (
                          <SelectItem key={index} value={branchData.branch}>
                            {branchData.branch}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.branch && (
                    <FormError message={errors.branch.message} />
                  )}
                </div>

                <div className="grid items-center gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select required={true} onValueChange={(e) => setSubject(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {notesSelection
                          .find((branchData) => branchData.branch === branch)
                          ?.subjects.map((subjectData, index) => (
                            <SelectItem key={index} value={subjectData}>
                              {subjectData}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <FormError message={errors.subject.message} />
                  )}
                </div>

                <div className="grid items-center gap-2">
                  <Label htmlFor="notes">Semester</Label>
                  <Select required={true} onValueChange={(e) => setSemester(e)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {semesters.map((semester, index) => (
                          <SelectItem key={index} value={semester}>
                            {semester}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.semester && (
                    <FormError message={errors.semester.message} />
                  )}
                </div>

                <div className="grid items-center gap-2">
                  <Label htmlFor="notes">Upload notes</Label>
                  <Input
                    id="link"
                    type="file"
                    placeholder="Notes"
                    {...register("fileUrl")}
                    className="col-span-3"
                  />
                  {errors.fileUrl && (
                    <FormError message={errors.fileUrl.message} />
                  )}
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
