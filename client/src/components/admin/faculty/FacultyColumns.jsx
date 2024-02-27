import ArrowUpDown from "@/components/icons/ArrowUpDown";
import MoreVertical from "@/components/icons/MoreVertical";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

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
    accessorKey: "designation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent"
        >
          Designation
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
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      const toggleStatus = () => {
       // const updatedStatus = user.isActive ? false : true;

        // Now, update the user status using your update function
        // For example: updateUserStatus(user.id, updatedStatus);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={toggleStatus}>
              {user.isVerified ? "Unverify" : "Verify"}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={toggleStatus}>
              {user.isActive ? "Make Inactive" : "Make Active"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
