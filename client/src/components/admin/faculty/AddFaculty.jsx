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

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/common/FormError";
import { branches } from "@/data/branches";
import { userRegister } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const AddFaculty = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state["auth"]);
  const form = useForm();
  const { register, handleSubmit, clearErrors, reset, formState } = form;
  const { errors } = formState;
  const [department, setDepartment] = useState();
  const [open, setOpen] = useState(false);

  const handleFacultyRegistration = async (data) => {
    const facultyData = new FormData();
    data.branch = department;
    data.role = "faculty";
    console.log("faculty avatar in handlefaculty", data.avatar[0]);
    facultyData.append("avatar", data.avatar[0]);
    Object.keys(data).forEach((key) => {
      if (key !== "avatar") {
        facultyData.append(key, data[key]);
      }
    });
    console.log("this is faculty data", facultyData);
    await dispatch(userRegister(facultyData));
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
            New Faculty
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Faculty</DialogTitle>
            <DialogDescription>
              Enter new faculty details here.
            </DialogDescription>
          </DialogHeader>

          <form
            className="h-[600px] overflow-auto"
            onSubmit={handleSubmit(handleFacultyRegistration)}
          >
            <div className="grid gap-6 py-4">
              <div className="grid items-center gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Dr. Faculty"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name should be atleast 3 characters long",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.name && <FormError message={errors.name.message} />}
              </div>

              <div className="grid items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="faculty@vvit.net"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@(vvit\.net|gmail\.com)$/,
                      message: "Invalid email",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.email && <FormError message={errors.email.message} />}
              </div>

              <div className="grid items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="text"
                  placeholder="******"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should be atleast 6 characters long",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.password && (
                  <FormError message={errors.password.message} />
                )}
              </div>

              <div className="grid items-center gap-3">
                <Label htmlFor="identity">Identity Number</Label>
                <Input
                  id="ID number"
                  type="text"
                  placeholder="2*BQ1A****"
                  {...register("identityNumber", {
                    required: "ID number is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+$/,
                      message: "Invalid ID number",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.identityNumber && (
                  <FormError message={errors.identityNumber.message} />
                )}
              </div>

              <div className="grid items-center gap-3">
                <Label htmlFor="contact">Contact</Label>
                <Input
                  id="contact"
                  type="text"
                  placeholder="9876543210"
                  {...register("contact", {
                    required: "Contact is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid contact number",
                    },
                  })}
                  className="col-span-3"
                />
                {errors.contact && (
                  <FormError message={errors.contact.message} />
                )}
              </div>

              <div className="grid items-center gap-3">
                <Label htmlFor="department">Department</Label>
                <Select required={true} onValueChange={(e) => setDepartment(e)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {branches.map((department, index) => {
                        return (
                          <SelectItem key={index} value={department.title}>
                            {department.title}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.department && (
                  <FormError>{errors.department.message}</FormError>
                )}
              </div>

              <div className="grid items-center gap-3">
                <Label htmlFor="avatar">Avatar</Label>
                <Input
                  id="avatar"
                  type="file"
                  {...register("avatar", {
                    required: "Avatar is required",
                  })}
                  className="col-span-3"
                />
                {errors.avatar && <FormError message={errors.avatar.message} />}
              </div>
            </div>

            <DialogFooter>
              <Button className="w-full" type="submit">
                {isLoading ? (
                  <>
                    Adding Faculty
                    <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                  </>
                ) : (
                  "Add Faculty"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddFaculty;
