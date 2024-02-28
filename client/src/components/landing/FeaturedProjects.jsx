import { Badge } from "../ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const FeaturedProjects = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Featured Projects</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed xl:text-base/relaxed">
              Check out some of the amazing projects created by our talented
              students using LearnSpace. These projects showcase creativity,
              innovation, and technical skills.
            </p>
          </div>
          <div className="grid max-w-5xl gap-6 lg:grid-cols-2">
            <Card className="w-full Cardh-full">
              <img
                alt="Project 1"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                height="336"
                src="https://learnspace.s3.ap-south-1.amazonaws.com/project/project-cover.png"
                width="600"
              />
              <CardHeader>
                <CardTitle>Online Learning Platform</CardTitle>
                <CardDescription>
                  A comprehensive platform for online learning, featuring
                  interactive video lessons, quizzes, and peer-to-peer
                  collaboration.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="w-full h-full">
              <img
                alt="Project 2"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                height="336"
                src="https://learnspace.s3.ap-south-1.amazonaws.com/project/project-cover.png"
                width="600"
              />
              <CardHeader>
                <CardTitle>Campus Social Network</CardTitle>
                <CardDescription>
                  Connect with classmates and explore campus life with this
                  social networking platform designed for students.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
