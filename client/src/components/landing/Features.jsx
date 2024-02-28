import { Badge } from "../ui/badge";
import {
  PresentationChartLineIcon,
  CodeBracketIcon,
  CpuChipIcon,
  PencilSquareIcon,
  NewspaperIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const features = [
  {
    icon: <PresentationChartLineIcon className="h-10 w-10" />,
    title: "Interactive Learning Paths",
    description:
      "Explore structured roadmaps guiding you through various subjects, ensuring a comprehensive learning journey.",
  },
  {
    icon: <CodeBracketIcon className="h-10 w-10" />,
    title: "Integrated Coding Environment",
    description:
      "Practice coding assignments with an integrated editor supporting multiple programming languages.",
  },
  {
    icon: <CpuChipIcon className="h-10 w-10" />,
    title: "Diverse Project Repositories",
    description:
      "Access project repositories spanning various domains for reference and inspiration in your projects.",
  },
  {
    icon: <PencilSquareIcon className="h-10 w-10" />,
    title: "Academic Note Repository",
    description:
      "Find a rich collection of academic notes, both handwritten and typed, shared by instructors and peers.",
  },
  {
    icon: <NewspaperIcon className="h-10 w-10" />,
    title: "Past Papers Repository",
    description:
      "Access a repository of previous papers to aid in exam preparation and understand exam patterns.",
  },
  {
    icon: <DocumentMagnifyingGlassIcon className="h-10 w-10" />,
    title: "Research Paper Database",
    description:
      "Explore an extensive database of research papers for in-depth study and academic exploration.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid text-center items-center gap-10 px-4 md:px-6">
        <div className="space-y-4">
          <Badge variant="secondary">Features</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features
          </h2>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed xl:text-base/relaxed">
            LearnSpace offers a range of features to enhance your learning
            experience. Here are some of the key features that make LearnSpace
            the perfect platform for students.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="w-full h-full">
              <CardHeader className="flex justify-center items-center">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
