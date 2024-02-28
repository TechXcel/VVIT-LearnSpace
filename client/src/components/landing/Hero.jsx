import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Centralized Learning</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Simplify Your Learning Journey
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              With LearnSpace, Simplify your academic journey. Access, organize,
              and collaborate on assignments, roadmaps, projects, papers, and
              notes effortlessly across devices, anytime, anywhere.
            </p>
          </div>
          <div className="space-x-4">
            <Link to="/auth/signin">
              <Button>Get started</Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary">Learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
