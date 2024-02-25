import ArrowUpDown from "@/components/icons/ArrowUpDown";
import LiveLink from "@/components/icons/LiveLink";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProblemsColumns = [
  {
    accessorKey: "serialNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          ID
          <ArrowUpDown />
        </Button>
      );
    },
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
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Status
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "serialNo",
    header: () => "Attempt",
    cell: ({ row }) => (
      <Link to={String(row.original.serialNo)}>
        <LiveLink />
      </Link>
    ),
  },
];

export default ProblemsColumns;
