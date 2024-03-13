import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "@/redux/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserProfile = () => {
  const { userId } = useParams();
  console.log(userId);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [dispatch, userId]);
  return (
    <Tabs defaultValue="profile" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="edit">Edit</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              These details will be displayed on your public profile.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Add avatar */}
            <div className="space-y-1">
              <Label htmlFor="avatar">Avatar</Label>
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" disabled defaultValue={user.name} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" disabled defaultValue={user.email} />
            </div>
            {/* Add more fields here */}
            <div className="space-y-1">
              <Label htmlFor="identityNumber">ID</Label>
              <Input
                id="identityNumber"
                disabled
                defaultValue={user.identityNumber}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="contact">Contact</Label>
              <Input id="contact" disabled defaultValue={user.contact} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" disabled defaultValue={user.branch} />
            </div>

            {/* Add more fields as needed */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="edit">
        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>View your profile details here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {/* Display avatar */}
            <div className="space-y-1">
              <Label htmlFor="avatar">Avatar</Label>
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
            </div>
            {/* Display current data */}
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" value={user.name} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user.email} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="identityNumber">ID</Label>
              <Input
                id="identityNumber"
                type="text"
                value={user.identityNumber}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="contact">Contact</Label>
              <Input id="contact" type="text" value={user.contact} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="branch">Branch</Label>
              <Input id="branch" type="text" value={user.branch} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default UserProfile;
