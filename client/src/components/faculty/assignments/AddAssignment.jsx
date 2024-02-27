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
import { useState } from "react";

const AddAssignment = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Dialog>
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

          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                placeholder="Assignment name"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Write some description about the assignment"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="name">Categories</Label>
              <MultiSelect
                options={[
                  {
                    value: "next.js",
                    label: "Next.js",
                  },
                  {
                    value: "sveltekit",
                    label: "SvelteKit",
                  },
                  {
                    value: "nuxt.js",
                    label: "Nuxt.js",
                  },
                  {
                    value: "remix",
                    label: "Remix",
                  },
                  {
                    value: "astro",
                    label: "Astro",
                  },
                  {
                    value: "wordpress",
                    label: "WordPress",
                  },
                  {
                    value: "express.js",
                    label: "Express.js",
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
            <Button type="submit">Save Assignment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddAssignment;
