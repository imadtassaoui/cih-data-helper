import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns, Table } from "./columns";

function TableTable() {
  const [data, setData] = useState<Table[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Simulate fetching data from an API
      const fetchedData: Table[] = [
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
          description:
            "The current status of the collaborator (active, inactive)",
          lastUpdated: "2024-06-06T16:30:00Z",
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
    <div className="flex flex-col gap-8">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default TableTable;
