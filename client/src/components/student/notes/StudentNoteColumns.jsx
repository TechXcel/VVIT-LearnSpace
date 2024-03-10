import ArrowUpDown from "@/components/icons/ArrowUpDown";
//import GitHub from "@/components/icons/GitHub";
import LiveLink from "@/components/icons/LiveLink";
//import MoreVertical from "@/components/icons/MoreVertical";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


import DeleteAlert from "@/components/common/DeleteAlert";
import { deleteNotes } from "@/redux/resourceSlice";

export const StudentNoteColumns = [
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
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 hover:bg-transparent"
      >
        Title
        <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "fileUrl",
    header: () => "Notes",
    cell: ({ row }) => (
      <a href={row.original.fileUrl} target="_blank" rel="noopener noreferrer">
        <LiveLink />
      </a>
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
        View Count
        <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => row.original.tags.join(", "),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 hover:bg-transparent"
      >
        Status
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <span
        className={`capitalize ${row.original.status === "approved" ? "text-green-500" : "text-yellow-500"}`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    header: "Delete",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const projectId = row.original._id;
      return (
        <div className="flex justify-center ">
          <DeleteAlert
            name="project"
            alertTitle="Are you sure?"
            alertDescription="This action cannot be undone. This will permanently delete the student and remove their data from our servers."
            id={projectId}
            handleDelete={deleteNotes}
          />
        </div>
      );
    },
  },
  
];
