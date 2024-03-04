/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const DeleteAlert = ({
  name,
  alertTitle,
  alertDescription,
  id,
  handleDelete,
}) => {
  console.log(id);
  const { isLoading } = useSelector((state) => state[name]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDeleteAction = async () => {
    const response = await dispatch(handleDelete(id));
    if (response.meta.requestStatus == "fulfilled") {
      setOpen(!open);
    } else {
      setOpen(open);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <TrashIcon className="w-4 h-4 cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
          <AlertDialogDescription>{alertDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAction} disabled={isLoading}>
            {isLoading ? (
              <>
                Deleting
                <Loader2 className="w-4 h-4 ml-2 animate-spin" />
              </>
            ) : (
              "Continue"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
