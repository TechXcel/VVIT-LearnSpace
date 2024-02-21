import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
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

const RegisterForm = () => {
  return (
    <>
      <form action="#" method="POST" className="mt-8">
        <div className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-base font-medium">
              Full Name
            </Label>
            <div className="mt-2">
              <Input
                type="text"
                className="border-neutral-700"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="text-base font-medium">
              Email Address
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
            <Label htmlFor="identity" className="text-base font-medium">
              Identity Number
            </Label>
            <div className="mt-2">
              <Input
                type="text"
                className="border-neutral-700"
                placeholder="ID Number"
              />
            </div>
          </div>
          <div>
            <div>
              <Label htmlFor="password" className="text-base font-medium">
                Password
              </Label>
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
            <Label htmlFor="picture" className="text-base font-medium">
              Avatar
            </Label>
            <div className="mt-2">
              <Input id="picture" type="file" className="border-neutral-700" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <Label htmlFor="picture" className="text-base font-medium">
                  Gender
                </Label>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger className="w-[180px] border-neutral-700">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent className="border-neutral-700">
                      <SelectGroup>
                        <SelectItem value="apple">Male</SelectItem>
                        <SelectItem value="banana">Female</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="picture" className="text-base font-medium">
                  Branch
                </Label>
                <div className="mt-2">
                  <Select>
                    <SelectTrigger className="w-[180px] border-neutral-700">
                      <SelectValue placeholder="Select your branch" />
                    </SelectTrigger>
                    <SelectContent className="border-neutral-700">
                      <SelectGroup>
                        {branches.map((branch, index) => {
                          return (
                            <SelectItem key={index} value={branch}>
                              {branch}
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
            <Button className="w-full font-semibold" type="button">
              Create Account <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
