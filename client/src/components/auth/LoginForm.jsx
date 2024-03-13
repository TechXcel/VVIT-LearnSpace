import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormError } from "../common/FormError";
import { useDispatch, useSelector } from "react-redux";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { adminLogin, userLogin } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleUserLogin = async (data) => {
    let response;
    if (role === "admin") {
      response = await dispatch(adminLogin(data));

      if (response.meta.requestStatus == "fulfilled") {
        navigate(`/${role}`, { replace: true });
      }
    } else {
      response = await dispatch(userLogin(data));
      if (response.meta.requestStatus == "fulfilled") {
        navigate(`/${role}`, { replace: true });
      }
    }
  };
  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit(handleUserLogin)}>
        <div className="space-y-5">
          <div>
            <Label htmlFor="email" className="text-base font-medium">
              Email
            </Label>
            <div className="mt-2 space-y-2">
              <Input
                type="email"
                className="border-neutral-700"
                placeholder="user@vvit.net"
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
              <Link
                t0="/auth/signup"
                className="text-sm font-semibold hover:underline"
              >
                {" "}
                Forgot password?{" "}
              </Link>
            </div>
            <div className="mt-2 space-y-2">
              <Input
                type="password"
                className="border-neutral-700"
                placeholder="******"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <FormError message={errors.password.message} />
              )}
            </div>
          </div>
          <div className="space-y-2">
            <RadioGroup
              defaultValue="student"
              className="flex justify-between"
              onValueChange={(e) => setRole(e)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="r1" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="faculty" id="r2" />
                <Label htmlFor="r2">Faculty</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="r2" />
                <Label htmlFor="r2">Admin</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Button className="w-full font-semibold" type="submit">
              {isLoading ? (
                <>
                  Signing in
                  <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                </>
              ) : (
                <>
                  Get started <ArrowRight className="ml-2" size={16} />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
