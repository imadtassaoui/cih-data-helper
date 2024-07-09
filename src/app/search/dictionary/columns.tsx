"use client";

import { ColumnDef } from "@tanstack/react-table";
import calendar from "../../../../public/icons/calendar.svg";
import Image from "next/image";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import RowInput from "@/app/components/ui/RowInput";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Dictionary = {
  id: string;
  collection: string;
  description: string;
  lastUpdated: string;
  publishingDate: string;
};

export const columns: ColumnDef<Dictionary>[] = [
  {
    accessorKey: "collection",
    header: ({ column }) => {
      return (
        <span className="flex flex-col gap-2 justify-between  min-w-[180px]">
          Collection
        </span>
      );
    },
    cell: (row) => {
      const value = row.getValue() as string;
      return <span className="font-semibold">{value}</span>;
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
  {
    accessorKey: "publishingDate",
    header: ({ column }) => {
      return (
        <span className="flex flex-col gap-2 justify-between min-w-[180px]">
          Publishing Date
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
