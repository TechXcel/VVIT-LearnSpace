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

const AddProblem = () => {
  return (
    <>
      <Dialog>
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

          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                placeholder="Problem name"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Write some description about the problem"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="name">Difficulty</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Difficulty level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Save Problem</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProblem;
