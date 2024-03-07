import ArrowUpDown from "@/components/icons/ArrowUpDown";
//import GitHub from "@/components/icons/GitHub";
import LiveLink from "@/components/icons/LiveLink";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteAlert from "@/components/common/DeleteAlert";
import { deleteNotes } from "@/redux/resourceSlice";
import ApprovalAlert from "@/components/common/ApprovalAlert";
import { approveNotes } from "@/redux/resourceSlice";

export const NoteColumns = [
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
    accessorKey: "uploader.name",
    
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 hover:bg-transparent"
      >
        Uploader
        <ArrowUpDown />
      </Button>
    ),
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
    id: "status",
    enableHiding: false,
    cell: ({ row }) => {
      const notesId = row.original._id;
      return (
        <div className="flex justify-center ">
          <ApprovalAlert
            name="resource"
            id={notesId}
            status={row.original.status}
            alertTitle={`Are you sure you want to ${row.original.status === "approved" ? "pending" : "approve"} this notes?`}
            alertDescription={`This action will ${row.original.status === "approved" ? "pending" : "approve"} the notes and notify the student.`}
            handleApprove={approveNotes}
          />
        </div>
      );
    },
  },

  {
    header: "Delete",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const facultyId = row.original._id;
      return (
        <div className="flex justify-center ">
          <DeleteAlert
            name="user"
            alertTitle="Are you sure?"
            alertDescription="This action cannot be undone. This will permanently delete the student and remove their data from our servers."
            id={facultyId}
            handleDelete={deleteNotes}
          />
        </div>
      );
    },
  },
];
