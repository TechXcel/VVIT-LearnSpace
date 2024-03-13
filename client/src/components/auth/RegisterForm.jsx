import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FormError } from "../common/FormError";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useDispatch } from "react-redux";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { branches } from "@/data/branches";
import { userRegister } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm();
  const { register, handleSubmit, formState, clearErrors } = form;
  const { errors } = formState;
  const [branch, setBranch] = useState();
  const { isLoading } = useSelector((state) => state.auth);

  const handleUserRegistration = async (data) => {
    const userData = new FormData();
    data.branch = branch;
    userData.append("avatar", data.avatar[0]);
    Object.keys(data).forEach((key) => {
      if (key !== "avatar") {
        userData.append(key, data[key]);
      }
    });

    const response = await dispatch(userRegister(userData));
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/auth/signin");
    }
  };
  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit(handleUserRegistration)}>
        <div className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-base font-medium">
              Full Name
            </Label>
            <div className="mt-2 space-y-2">
              <Input
                type="text"
                className="border-neutral-700"
                placeholder="Student name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name should be atleast 3 characters",
                  },
                })}
              />
              {errors.name && <FormError message={errors.name.message} />}
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-base font-medium">
              Email
            </Label>
            <div className="mt-2 space-y-2">
              <Input
                type="email"
                className="border-neutral-700"
                placeholder="2*bq1a****@vvit.net"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@vvit.net$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && <FormError message={errors.email.message} />}
            </div>
          </div>
          <div>
            <div>
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
            </div>
            <div className="mt-2 space-y-2">
              <Input
                type="password"
                className="border-neutral-700"
                placeholder="******"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be atleast 6 characters",
                  },
                })}
              />
            </div>
          </div>
          <div>
            <div>
              <Label htmlFor="identity" className="text-base font-medium">
                Identity Number
              </Label>
            </div>

            <div className="mt-2 space-y-2">
              <Input
                type="text"
                className="border-neutral-700"
                placeholder="2*BQ1A****"
                {...register("identityNumber", {
                  required: "Identity number is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+$/,
                    message: "Invalid identity number",
                  },
                })}
              />
              {errors.identityNumber && (
                <FormError message={errors.identityNumber.message} />
              )}
            </div>
          </div>

          <div>
            <div>
              <Label htmlFor="identity" className="text-base font-medium">
                Contact Number
              </Label>
            </div>

            <div className="mt-2 space-y-2">
              <Input
                type="text"
                className="border-neutral-700"
                placeholder="1234567890"
                {...register("contact", {
                  required: "Contact number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid contact number",
                  },
                })}
              />
              {errors.contact && <FormError message={errors.contact.message} />}
            </div>
          </div>

          <div>
            <Label htmlFor="avatar" className="text-base font-medium">
              Avatar
            </Label>
            <div className="mt-2 space-y-2">
              <Input
                id="avatar"
                type="file"
                className="border-neutral-700"
                {...register("avatar", {
                  required: {
                    value: true,
                    message: "Avatar is required",
                  },
                })}
              />
              {errors.avatar && <FormError message={errors.avatar.message} />}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-2 gap-x-4">
              <div>
                <Label htmlFor="branch" className="text-base font-medium">
                  Branch
                </Label>
                <div className="mt-2">
                  <Select required={true} onValueChange={(e) => setBranch(e)}>
                    <SelectTrigger className="w-[180px] border-neutral-700">
                      <SelectValue placeholder="Choose branch" />
                    </SelectTrigger>
                    <SelectContent className="border-neutral-700">
                      <SelectGroup>
                        {branches.map((branch, index) => {
                          return (
                            <SelectItem key={index} value={branch.title}>
                              {branch.title}
                            </SelectItem>
                          );
                        })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button className="w-full font-semibold" type="submit">
              {isLoading ? (
                <>
                  Registering
                  <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                </>
              ) : (
                <>
                  Create Account <ArrowRight className="ml-2" size={16} />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
