import ArrowUpDown from "@/components/icons/ArrowUpDown";
import Code from "@/components/icons/Code";

import MoreVertical from "@/components/icons/MoreVertical";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export const FacultyProblemColumns = [
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
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Title
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => "Description",
    cell: ({ row }) => <p>{row.original.description}</p>,
  },
  {
    accessorKey: "difficulty",
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
        className={`capitalize ${row.original.difficulty === "Easy" ? "bg-green-100 text-green-800" : row.original.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
      >
        {row.original.difficulty}
      </Badge>
    ),
  },

  {
    accessorKey: "viewCount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 hover:bg-transparent"
      >
        Views
        <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "completionCount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 hover:bg-transparent"
      >
        Submissions
        <ArrowUpDown />
      </Button>
    ),
  },
  // navigate through problem objectId
  {
    accessorKey: "submissions",
    header: () => "Submissions",
    cell: ({ row }) => (
      <Link to={String(row.original.objectId)}>
        <Button variant="secondary">
          <Code /> Check
        </Button>
      </Link>
    ),
  },
];
