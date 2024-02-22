import { useState } from "react";
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
import { MultiSelect } from "../ui/multi-select";
import { Textarea } from "../ui/textarea";

const AddProject = () => {
  const [selected, setSelected] = useState([]);

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
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Banner
              </Label>
              <Input
                id="name"
                type="file"
                placeholder="Live project URL"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Categories
              </Label>
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
                className="w-52 col-span-3"
                title="Select tags"
              />
            </div>
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
