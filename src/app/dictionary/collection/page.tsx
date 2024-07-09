import UpperBar from "@/app/components/UpperBar";
import Image from "next/image";
import { FC } from "react";
import { DataTable } from "./data-table";
import { Collection, columns } from "./columns";
import dictionary from "../../../../public/icons/book-open.svg";

async function getData(): Promise<Collection[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      table: "users",
      description: "Table containing user information",
      sourceSOP: "SOP-001",
      scheduling: "Daily",
      lastUpdated: "2024-06-15",
      datakeeper: "John Doe",
    },
    {
      id: "2",
      table: "orders",
      description: "Table containing order details",
      sourceSOP: "SOP-002",
      scheduling: "Hourly",
      lastUpdated: "2024-06-14",
      datakeeper: "Jane Smith",
    },
    {
      id: "3",
      table: "products",
      description: "Table containing product information",
      sourceSOP: "SOP-003",
      scheduling: "Weekly",
      lastUpdated: "2024-06-13",
      datakeeper: "Emily Johnson",
    },
    {
      id: "4",
      table: "inventory",
      description: "Table containing inventory status",
      sourceSOP: "SOP-004",
      scheduling: "Monthly",
      lastUpdated: "2024-06-12",
      datakeeper: "Michael Brown",
    },
    {
      id: "5",
      table: "transactions",
      description: "Table containing transaction records",
      sourceSOP: "SOP-005",
      scheduling: "Daily",
      lastUpdated: "2024-06-11",
      datakeeper: "Jessica Davis",
    },
    {
      id: "6",
      table: "customers",
      description: "Table containing customer details",
      sourceSOP: "SOP-006",
      scheduling: "Weekly",
      lastUpdated: "2024-06-10",
      datakeeper: "Daniel Wilson",
    },
    {
      id: "7",
      table: "suppliers",
      description: "Table containing supplier information",
      sourceSOP: "SOP-007",
      scheduling: "Monthly",
      lastUpdated: "2024-06-09",
      datakeeper: "Samantha Moore",
    },
    {
      id: "8",
      table: "shipments",
      description: "Table containing shipment details",
      sourceSOP: "SOP-008",
      scheduling: "Daily",
      lastUpdated: "2024-06-08",
      datakeeper: "James Taylor",
    },
    {
      id: "9",
      table: "employees",
      description: "Table containing employee information",
      sourceSOP: "SOP-009",
      scheduling: "Weekly",
      lastUpdated: "2024-06-07",
      datakeeper: "Laura Anderson",
    },
    {
      id: "10",
      table: "departments",
      description: "Table containing department details",
      sourceSOP: "SOP-010",
      scheduling: "Monthly",
      lastUpdated: "2024-06-06",
      datakeeper: "Robert Jackson",
    },
    {
      id: "11",
      table: "sales",
      description: "Table containing sales records",
      sourceSOP: "SOP-011",
      scheduling: "Daily",
      lastUpdated: "2024-06-05",
      datakeeper: "Olivia Martin",
    },
    {
      id: "12",
      table: "returns",
      description: "Table containing return records",
      sourceSOP: "SOP-012",
      scheduling: "Weekly",
      lastUpdated: "2024-06-04",
      datakeeper: "Ethan Thompson",
    },
    {
      id: "13",
      table: "reviews",
      description: "Table containing customer reviews",
      sourceSOP: "SOP-013",
      scheduling: "Monthly",
      lastUpdated: "2024-06-03",
      datakeeper: "Charlotte White",
    },
    {
      id: "14",
      table: "feedback",
      description: "Table containing customer feedback",
      sourceSOP: "SOP-014",
      scheduling: "Daily",
      lastUpdated: "2024-06-02",
      datakeeper: "Matthew Harris",
    },
    {
      id: "15",
      table: "analytics",
      description: "Table containing website analytics",
      sourceSOP: "SOP-015",
      scheduling: "Weekly",
      lastUpdated: "2024-06-01",
      datakeeper: "Isabella Clark",
    },
  ];
}

export default async function CollectionPage() {
  const data = await getData();
  const breadcrumbs = ["Dictionary", "/ Accounts"];

  return (
    <main className=" w-full  slate-900 p-6 flex flex-col gap-10">
      <UpperBar breadcrumbs={breadcrumbs}>
        <Image src={dictionary} alt="dictionary" width={20} />
      </UpperBar>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl">Accounts’ Collection</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
