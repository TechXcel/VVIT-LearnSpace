import { Badge } from "../ui/badge";

const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Student Voices
            </h2>
          </div>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center rounded-full overflow-hidden border-2 dark:border-gray-400 border-gray-800">
                <img
                  alt="User 1"
                  className="aspect-square object-cover"
                  height="64"
                  src="https://avatars.githubusercontent.com/u/96189881?v=4"
                  width="64"
                />
              </div>
              <blockquote className="italic text-muted-foreground border-l pl-4">
                &quot;LearnSpace has been a game-changer for me. I love how easy
                it is to access my course materials, submit assignments, and
                interact with my peers. The platform is intuitive and
                user-friendly, making my learning experience more
                enjoyable.&quot;
              </blockquote>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center rounded-full overflow-hidden border-2 dark:border-gray-400 border-gray-800">
                <img
                  alt="User 2"
                  className="aspect-square object-cover"
                  height="64"
                  src="https://avatars.githubusercontent.com/u/96189881?v=4"
                  width="64"
                />
              </div>
              <blockquote className="italic text-muted-foreground border-l pl-4">
                &quot;As a faculty member, I appreciate the features offered by
                LearnSpace. It allows me to organize my course materials, share
                resources with my students, and engage in discussions. The
                platform is a valuable addition to our academic
                environment.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
