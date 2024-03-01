import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { UsersIcon, FileIcon, MoreHorizontalIcon } from "lucide-react";
import { BarChart, LineChart } from "@tremor/react";
import { useState } from "react";
import Code from "../icons/Code";
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
    assignments: 45,
    problems: 78,
  },
  {
    date: "Feb 23",
    assignments: 52,
    problems: 71,
  },
  {
    date: "Mar 23",
    assignments: 48,
    problems: 80,
  },
  {
    date: "Apr 23",
    assignments: 50,
    problems: 75,
  },
  {
    date: "May 23",
    assignments: 55,
    problems: 70,
  },
  {
    date: "Jun 23",
    assignments: 60,
    problems: 65,
  },
  {
    date: "Jul 23",
    assignments: 65,
    problems: 60,
  },
];

const Dashboard = () => {
  const [value, setValue] = useState(null);
  const [submission, setSubmission] = useState(null);
  return (
    <main className="grid items-start min-h-screen gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +10% from last semester
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Faculty</CardTitle>
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
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
            <FileIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
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
            <FileIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +25% from last year
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <div className="flex items-center gap-2">
              <UsersIcon className="w-4 h-4" />
              <CardTitle className="text-sm font-medium">
                Number of Students and Faculty
              </CardTitle>
            </div>
            <Button className="w-8 h-8 rounded-full" size="icon">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">More</span>
            </Button>
          </CardHeader>
          <CardContent>
            <BarChart
              className="mt-6"
              data={chartdata}
              index="year"
              categories={["students", "faculty"]}
              colors={["gray", "green"]}
              yAxisWidth={30}
              onValueChange={(v) => setValue(v)}
            />
            {/* <BarChart className="w-full aspect-[1/1]" /> */}
          </CardContent>
        </Card>
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <div className="flex items-center gap-2">
              <UsersIcon className="w-4 h-4" />
              <CardTitle className="text-sm font-medium">
                Faculty by Gender
              </CardTitle>
            </div>
            <Button className="w-8 h-8 rounded-full" size="icon">
              <MoreHorizontalIcon className="w-4 h-4" />
              <span className="sr-only">More</span>
            </Button>
          </CardHeader>
          <CardContent>
            <BarChart className="w-full aspect-[1/1]" />
          </CardContent>
        </Card> */}
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            <CardTitle className="text-sm font-medium">
              Assignment and Problem Submissions
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
            categories={["assignments", "problems"]}
            colors={["gray", "green"]}
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

export default Dashboard;
