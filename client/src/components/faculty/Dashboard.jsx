import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { UsersIcon, FileIcon, MoreHorizontalIcon } from "lucide-react";
import { ProgressCircle, LineChart } from "@tremor/react";
import { useState } from "react";
import Code from "../icons/Code";
import Project from "../icons/Project";
import Assignment from "../icons/Assignment";
import Paper from "../icons/Paper";
import Note from "../icons/Note";
import { notes } from "@/data/notes";
const chartdata = [
  {
    year: 2022,
    students: 1450,
    faculty: 300,
  },
  {
    year: 2023,
    students: 1580,
    faculty: 320,
  },
  {
    year: 2024,
    students: 1720,
    faculty: 350,
  },
];

const submissions = [
  {
    date: "Jan 23",
    papers: 45,
    projects: 78,
    notes: 10,
    research: 5,
  },
  {
    date: "Feb 23",
    papers: 52,
    projects: 71,
    notes: 20,
    research: 10,
  },
  {
    date: "Mar 23",
    papers: 48,
    projects: 80,
    notes: 15,
    research: 8,
  },
  {
    date: "Apr 23",
    papers: 50,
    projects: 75,
    notes: 5,
    research: 3,
  },
  {
    date: "May 23",
    papers: 55,
    projects: 70,
    notes: 12,
    research: 6,
  },
  {
    date: "Jun 23",
    papers: 60,
    projects: 65,
    notes: 18,
    research: 7,
  },
  {
    date: "Jul 23",
    papers: 65,
    projects: 60,
    notes: 8,
    research: 4,
  },
];

export const Dashboard = () => {
  const [value, setValue] = useState(null);
  const [submission, setSubmission] = useState(null);
  return (
    <main className="grid items-start gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total papers</CardTitle>
            <Assignment />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +10% from last semester
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Papers</CardTitle>
            <Paper />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +20% from last year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Notes</CardTitle>
            <Note />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +15% from last semester
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Projects
            </CardTitle>
            <Project />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +25% from last year
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <CardTitle className="text-sm font-medium">
              Resources Uploaded
            </CardTitle>
          </div>
          <Button className="w-8 h-8 rounded-full" size="icon">
            <MoreHorizontalIcon className="w-4 h-4" />
            <span className="sr-only">More</span>
          </Button>
        </CardHeader>
        <CardContent>
          <LineChart
            className="mt-4 h-72"
            data={submissions}
            index="date"
            categories={["papers", "projects", "notes", "research"]}
            colors={["gray", "green", "blue", "red"]}
            yAxisWidth={30}
            onValueChange={(v) => setSubmission(v)}
            connectNulls={true}
          />
          {/* Display the selected value */}
          {/* <CodeBlock
            source={JSON.stringify(value, null, 2)}
            variant="empty"
            className="mt-8"
          /> */}
        </CardContent>
      </Card>
    </main>
  );
};
