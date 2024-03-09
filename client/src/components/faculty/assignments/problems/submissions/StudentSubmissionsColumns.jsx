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

export const StudentSubmissionsColumns = [
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
    accessorKey: "submittedBy.name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 hover:bg-transparent"
      >
        Student
        <ArrowUpDown />
      </Button>
    ),
  },
  // {
  //   accessorKey: "language",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         className="p-0 hover:bg-transparent"
  //       >
  //         Language
  //         <ArrowUpDown />
  //       </Button>
  //     );
  //   },
  // },
  {
    accessorKey: "providedSolution",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Solution
          <ArrowUpDown />
        </Button>
      );
    },
  },
  // navigate through problem objectId
  {
    accessorKey: "submissions",
    header: () => "Editor",
    cell: ({ row }) => (
      <Link to={String(row.original._id)}>
        <Button variant="secondary">
          <Code /> View
        </Button>
      </Link>
    ),
  },
];
