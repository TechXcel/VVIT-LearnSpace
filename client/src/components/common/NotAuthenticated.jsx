import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const NotAuthenticated = () => {
  return (
    <section className="flex items-center justify-center w-full h-full mx-auto">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center space-y-2">
          <h2 className="text-lg font-bold">You are not logged in</h2>
          <p className="text-sm text-muted-foreground">
            Please log in to access this page
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link to="/auth/signin">
            <Button className="w-full"> Go back to login page</Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default NotAuthenticated;
