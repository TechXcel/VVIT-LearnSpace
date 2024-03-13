import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center justify-center w-full h-full mx-auto">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center space-y-2">
          <h2 className="text-lg font-bold">Unauthorized</h2>
          <p className="text-sm text-muted-foreground">
            You are not authorized to access this page
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link to="/">
            <Button
              onClick={() => navigate(-1, { replace: true })}
              className="w-full"
            >
              Go back to safety
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default Unauthorized;
