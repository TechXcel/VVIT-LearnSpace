/* eslint-disable react/prop-types */
import { CopyIcon } from "@radix-ui/react-icons";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

const ResearchDialog = ({ research }) => {
  const fileUrlRef = useRef(null);

  const handleCopyClick = (urlRef) => {
    urlRef.current.select();
    document.execCommand("copy");

    toast.success(`Copied to clipboard`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">More details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{research.title}</DialogTitle>
          <DialogDescription>{research.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-3">
            <Label htmlFor="repositoryUrl">File Url</Label>
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <Input
                  id="fileUrl"
                  value={research.fileUrl}
                  readOnly
                  ref={fileUrlRef}
                />
              </div>
              <Button
                type="button"
                size="sm"
                className="px-3"
                onClick={() => handleCopyClick(fileUrlRef)}
              >
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          

          <div className="grid items-center gap-2">
            <Label htmlFor="owner">Owner</Label>
            <Input id="owner" value={research.uploader.name} disabled />
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" className="w-full" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResearchDialog;
