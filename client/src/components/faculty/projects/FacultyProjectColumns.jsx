import ArrowUpDown from "@/components/icons/ArrowUpDown";
import GitHub from "@/components/icons/GitHub";
import LiveLink from "@/components/icons/LiveLink";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteAlert from "@/components/common/DeleteAlert";
import { approveProject, deleteProject } from "@/redux/projectSlice";
import ApprovalAlert from "@/components/common/ApprovalAlert";


export const FacultyProjectColumns = [
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
    accessorKey: "owner.name",
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
    accessorKey: "repositoryUrl",
    header: () => "GitHub",
    cell: ({ row }) => (
      <a
        href={row.original.repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
    ),
  },
  {
    accessorKey: "liveDemoUrl",
    header: () => "Live",
    cell: ({ row }) => (
      <a
        href={row.original.liveDemoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
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
      const projectId = row.original._id;
      return (
        <div className="flex justify-center ">
          <ApprovalAlert
            name="project"
            id={projectId}
            status={row.original.status}
            alertTitle={`Are you sure you want to ${row.original.status === "approved" ? "pending" : "approve"} this project?`}
            alertDescription={`This action will ${row.original.status === "approved" ? "pending" : "approve"} the project and notify the student.`}
            handleApprove={approveProject}
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
      const projectId = row.original._id;
      return (
        <div className="flex justify-center ">
          <DeleteAlert
            name="project"
            alertTitle="Are you sure?"
            alertDescription="This action cannot be undone. This will permanently delete the student and remove their data from our servers."
            id={projectId}
            handleDelete={deleteProject}
          />
        </div>
      );
    },
  },
];
