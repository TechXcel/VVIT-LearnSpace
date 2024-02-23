import { projects } from "@/data/projects";
import { Button } from "../ui/button";
import { Card, CardHeader } from "../ui/card";

const ViewProject = () => {
  const project = projects.slice(0, 1)[0];
  console.log(project);
  

  return (
    <div className="container flex flex-col items-center w-full max-w-screen-2xl">
      <main className="mt-10">
        <div className="relative w-full mx-auto mb-4 md:mb-0">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold leading-tight">
              {project.title}
            </h2>
            <p className="inline-flex items-center justify-center py-2 mb-2">
              # Web Development
            </p>
          </div>

          <img
            src={project.coverImage}
            className="object-cover w-full lg:rounded"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="w-full px-4 mt-12 text-lg leading-relaxed lg:px-0 lg:w-3/4">
            <div className="pl-4 mb-6 italic border-l-4 rounded border-primary">
              Sportsman do offending supported extremity breakfast by listening.
              Decisively advantages nor expression unpleasing she led met.
              Estate was tended ten boy nearer seemed. As so seeing latter he
              should thirty whence. Steepest speaking up attended it as. Made
              neat an on be gave show snug tore.
            </div>

            <p className="pb-6">
              Difficulty on insensible reasonable in. From as went he they.
              Preference themselves me as thoroughly partiality considered on in
              estimating. Middletons acceptance discovered projecting so is so
              or. In or attachment inquietude remarkably comparison at an. Is
              surrounded prosperous stimulated am me discretion expression. But
              truth being state can she china widow. Occasional preference fat
              remarkably now projecting uncommonly dissimilar. Sentiments
              projection particular companions interested do at my delightful.
              Listening newspaper in advantage frankness to concluded unwilling.
            </p>

            <div className="flex space-x-4">
              <Button>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  Live Demo
                </a>
              </Button>
              <Button>
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  GitHub Repo
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full max-w-screen-sm m-auto mt-12 lg:w-1/4">
            <Card class="p-4 border-t border-b md:border md:rounded">
              <CardHeader class="flex py-2">
                <img
                  src="https://github.com/shaikahmadnawaz.png"
                  className="object-cover w-10 h-10 mr-2 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">Nawaz</p>
                  <p className="text-xs font-semibold">20BQ1A05L5</p>
                </div>
              </CardHeader>

              <p className="py-3">
                Nawaz writes about technology Yourself required no at thoughts
                delicate landlord it be. Branched dashwood do is whatever it.
              </p>

              <Button className="w-full">Know More</Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewProject;
