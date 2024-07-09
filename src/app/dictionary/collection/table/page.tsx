import UpperBar from "@/app/components/UpperBar";
import Image from "next/image";
import { FC } from "react";
// import { DataTable } from "./data-table";
// import { Collection, columns } from "./columns";
import dictionary from "../../../../../public/icons/book-open.svg";
import { columns, Table } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Table[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      fieldLabel: "First Name",
      type: "String",
      description: "The first name of the collaborator",
      lastUpdated: "2024-06-01T10:30:00Z",
      primaryKey: true,
    },
    {
      id: "2",
      fieldLabel: "Last Name",
      type: "String",
      description: "The last name of the collaborator",
      lastUpdated: "2024-06-02T11:00:00Z",
    },
    {
      id: "3",
      fieldLabel: "Email",
      type: "String",
      description: "The email address of the collaborator",
      lastUpdated: "2024-06-03T12:15:00Z",
    },
    {
      id: "4",
      fieldLabel: "Role",
      type: "String",
      description: "The role of the collaborator within the project",
      lastUpdated: "2024-06-04T14:20:00Z",
    },
    {
      id: "5",
      fieldLabel: "Join Date",
      type: "Date",
      description: "The date the collaborator joined the project",
      lastUpdated: "2024-06-05T09:45:00Z",
    },
    {
      id: "6",
      fieldLabel: "Status",
      type: "String",
      description: "The current status of the collaborator (active, inactive)",
      lastUpdated: "2024-06-06T16:30:00Z",
    },
  ];
}

export default async function TablePage() {
  const data = await getData();
  const breadcrumbs = ["Dictionary", "/ Accounts", "/ users"];

  return (
    <main className=" w-full  slate-900 p-6 flex flex-col gap-10">
      <UpperBar breadcrumbs={breadcrumbs}>
        <Image src={dictionary} alt="dictionary" width={20} />
      </UpperBar>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl">users's Table</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
