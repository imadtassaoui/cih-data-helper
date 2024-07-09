"use client";

import { ColumnDef } from "@tanstack/react-table";
import calendar from "../../../../../public/icons/calendar.svg";
import pk from "../../../../../public/icons/pk.svg";
import Image from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import RowInput from "../../../components/ui/RowInput";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Table = {
  id: string;
  fieldLabel: string;
  type: string;
  description: string;
  lastUpdated: string;
  primaryKey?: boolean;
};

export const columns: ColumnDef<Table>[] = [
  {
    accessorKey: "fieldLabel",
    header: ({ column }) => {
      return (
        <span className="flex flex-col gap-2 justify-between  min-w-[180px]">
          Field Label
        </span>
      );
    },
    cell: (row) => {
      const value = row.getValue() as string;
      const primaryKey = row.row.original.primaryKey;
      return (
        <span className="font-semibold flex  gap-1">
          {primaryKey ? <Image src={pk} alt="primaryKey" /> : null}
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <span className="flex flex-col gap-2 justify-between  min-w-[180px]">
          Type
          <div className="flex gap-2 items-center ">
            <RowInput disabled />
            <ArrowUpDown
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            />
          </div>
        </span>
      );
    },
    cell: (row) => {
      const value = row.getValue() as string;
      return <span className="">{value}</span>;
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <span className="flex flex-col gap-2 justify-between  min-w-[180px]">
          Description
          <div className="flex gap-2 items-center ">
            <RowInput disabled />
            <ArrowUpDown
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            />
          </div>
        </span>
      );
    },
    cell: (row) => {
      const value = row.getValue() as string;
      return <span className="">{value}</span>;
    },
  },

  {
    accessorKey: "lastUpdated",
    header: ({ column }) => {
      return (
        <span className="flex flex-col gap-2 justify-between  min-w-[180px]">
          Last Updated
          <div className="flex gap-2 items-center ">
            <RowInput disabled />
            <ArrowUpDown
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            />
          </div>
        </span>
      );
    },
    cell: (row) => {
      const formatted = new Date(row.getValue() as string).toLocaleDateString();
      return (
        <div className="flex gap-2 text-base font-semibold min-w-[180px]">
          <Image src={calendar} alt="calendar-icon" />
          {formatted}
        </div>
      );
    },
  },
];
