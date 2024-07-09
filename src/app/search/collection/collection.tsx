import React, { useEffect, useState } from "react";
import UpperBar from "@/app/components/UpperBar";
import Image from "next/image";
import { DataTable } from "./data-table";
import { Collection, columns } from "./columns";
import dictionary from "../../../../public/icons/book-open.svg";

function CollectionTable() {
  const [data, setData] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Simulate fetching data from an API
      const fetchedData: Collection[] = [
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
      ];

      setData(fetchedData);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default CollectionTable;
