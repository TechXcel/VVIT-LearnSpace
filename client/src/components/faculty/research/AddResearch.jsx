
import Plus from "../../icons/Plus";
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


const AddResearch = () => {
  //const [selected, setSelected] = useState([]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">
            <Plus />
            New Paper
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New paper</DialogTitle>
            <DialogDescription>
              Enter new paper details here.
            </DialogDescription>
          </DialogHeader>
  
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="name">Title</Label>
              <Input
                id="name"
                placeholder="paper name"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="description">Tags</Label>
              <Input
                id="tags"
                placeholder="Paper tags"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center gap-4">
              <Label htmlFor="description">Link</Label>
              <Input
                id="link"
                placeholder="paper link"
                className="col-span-3"
              />
            </div>
          </div>
  
          <DialogFooter>
            <Button type="submit">Save Paper</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
  
};

export default AddResearch;
