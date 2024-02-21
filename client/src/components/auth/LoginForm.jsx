import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowRight } from "lucide-react";

const LoginForm = () => {
  return (
    <>
      <form action="#" method="POST" className="mt-8">
        <div className="space-y-5">
          <div>
            <Label htmlFor="email" className="text-base font-medium">
              Email address
            </Label>
            <div className="mt-2">
              <Input
                type="email"
                className="border-neutral-700"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-base font-medium">
                {" "}
                Password{" "}
              </Label>
              <Link
                href="/auth/signup"
                title=""
                className="text-sm font-semibold hover:underline"
              >
                {" "}
                Forgot password?{" "}
              </Link>
            </div>
            <div className="mt-2">
              <Input
                type="password"
                className="border-neutral-700"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <Button className="w-full font-semibold" type="button">
              Get started <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
