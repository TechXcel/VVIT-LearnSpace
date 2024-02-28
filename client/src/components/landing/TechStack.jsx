import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Badge } from "../ui/badge";

const TechStack = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Tech Stack</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Tech Stack
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed xl:text-base/relaxed">
              LearnSpace is built using the latest technologies to provide a
              seamless and feature-rich platform for students and educators.
              Here&apos;s a glimpse of the tech stack used in LearnSpace.
            </p>
          </div>
          <div className="grid max-w-sm gap-2 justify-center items-center mx-auto lg:grid-cols-2">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">React</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">Shadcn UI</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">TanStack Table</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">React Hook Form</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">Redux Toolkit</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">Node.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">Express.js</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">MongoDB</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="h-4 w-4 text-2xl text-primary" />
              <span className="font-medium">AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
