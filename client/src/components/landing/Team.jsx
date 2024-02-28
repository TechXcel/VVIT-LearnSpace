import { Badge } from "../ui/badge";

const Team = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Meet the Team</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed xl:text-base/relaxed">
              The LearnSpace team is dedicated to creating an innovative and
              user-friendly platform for students and educators. Meet the
              individuals who are passionate about transforming the learning
              experience.
            </p>
          </div>
          <div className="grid gap-4 justify-items-center mx-auto lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 1"
                className="rounded-full object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/96189881?v=4"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="flex flex-col items-center space-y-1">
                <h3 className="font-semibold">Shaik Ahmad Nawaz</h3>
                <p className="text-xs text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 2"
                className="rounded-full object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/95030840?v=4"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="flex flex-col items-center space-y-1">
                <h3 className="font-semibold">Tammana Chandrika</h3>
                <p className="text-xs text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 1"
                className="rounded-full object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/109469862?v=4"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="flex flex-col items-center space-y-1">
                <h3 className="font-semibold">Pillutla Surya</h3>
                <p className="text-xs text-muted-foreground">
                  Frontend Developer
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <img
                alt="Team Member 1"
                className="rounded-full object-cover"
                height="200"
                src="https://avatars.githubusercontent.com/u/96186678?v=4"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="flex flex-col items-center space-y-1">
                <h3 className="font-semibold">Shaik Sajid Ameer</h3>
                <p className="text-xs text-muted-foreground">
                  Frontend Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
