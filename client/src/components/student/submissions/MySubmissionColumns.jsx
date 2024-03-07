import ArrowUpDown from "@/components/icons/ArrowUpDown";
import Code from "@/components/icons/Code";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const MySubmissionColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "assignmentId.title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Assignment
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "problemId.title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Problem
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "problemId.difficulty",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Difficulty
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Badge
        variant="secondary"
        className={`capitalize ${row.original.problemId.difficulty === "Easy" ? "bg-green-100 text-green-800" : row.original.problemId.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
      >
        {row.original.problemId.difficulty}
      </Badge>
    ),
  },

  // {
  //   accessorKey: "viewCount",
  //   header: ({ column }) => (
  //     <Button
  //       variant="ghost"
  //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       className="p-0 hover:bg-transparent"
  //     >
  //       Views
  //       <ArrowUpDown />
  //     </Button>
  //   ),
  // },
  // navigate through problem objectId
  {
    accessorKey: "attempt",
    header: () => "Solution",
    cell: ({ row }) => (
      <Link to={String(row.original._id)}>
        <Button variant="secondary">
          <Code /> View
        </Button>
      </Link>
    ),
  },
];

export default MySubmissionColumns;
