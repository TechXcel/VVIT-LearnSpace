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
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

const ApprovalAlert = ({
  name,
  alertTitle,
  alertDescription,
  id,
  handleApprove,
  status,
}) => {
  console.log(id);
  const { isLoading } = useSelector((state) => state[name]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleApproveAction = async () => {
    const response = await dispatch(handleApprove(id));
    if (response.meta.requestStatus == "fulfilled") {
      setOpen(!open);
    } else {
      setOpen(open);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {status === "approved" ? (
          <Button variant="outline" className="text-green-500">
            {status}
          </Button>
        ) : (
          <Button variant="outline" className="text-yellow-500">
            {status}
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
          <AlertDialogDescription>{alertDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleApproveAction} disabled={isLoading}>
            {isLoading ? (
              <>
                Processing
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

export default ApprovalAlert;
