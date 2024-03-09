import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const NotFound = () => {
  return (
    <section className="flex items-center justify-center w-full h-full mx-auto">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center space-y-2">
          <h2 className="text-lg font-bold">Page Not Found</h2>
          <p className="text-sm text-muted-foreground">
            The page you are looking for could not be found.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link to="/">
            <Button className="w-full">Go back to the homepage</Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default NotFound;
