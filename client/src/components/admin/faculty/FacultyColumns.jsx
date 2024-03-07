import ArrowUpDown from "@/components/icons/ArrowUpDown";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import DeleteAlert from "@/components/common/DeleteAlert";
import { deleteFaculty } from "@/redux/userSlice";

export const FacultyColumns = [
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
    header: "Avatar",
    cell: ({ row }) => {
      return (
        <img src={row.original.avatar} className="w-10 h-10 rounded-full" />
      );
    },
  },
  {
    accessorKey: "identityNumber",
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Name
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
  },

  {
    accessorKey: "contact",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Contact No
          <ArrowUpDown />
        </Button>
      );
    },
  },

  {
    accessorKey: "branch",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Branch
          <ArrowUpDown />
        </Button>
      );
    },
  },
  {
    accessorKey: "isVerified",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="p-0 hover:bg-transparent"
      >
        Verified
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <Badge
        variant="secondary"
        className={`capitalize ${row.original.isVerified ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
      >
        {row.original.isVerified ? "yes" : "no"}
      </Badge>
    ),
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
    cell: ({ row }) => {
      const status = row.original.isActive;
      return (
        <span
          className={`capitalize ${status ? "text-green-500" : "text-red-500"}`}
        >
          {status ? "active" : "inactive"}
        </span>
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
            handleDelete={deleteFaculty}
          />
        </div>
      );
    },
  },
  
];
