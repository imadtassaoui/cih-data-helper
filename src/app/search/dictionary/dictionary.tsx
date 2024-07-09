import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dictionary, columns } from "./columns";
import { DataTable } from "./data-table";
import dictionary from "../../../public/icons/book-open.svg";

function DictionaryTable() {
  const [data, setData] = useState<Dictionary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Simulate fetching data from an API
      const fetchedData: Dictionary[] = [
        {
          id: "728ed52f",
          collection: "Accounts",
          description:
            "Lorem ipsum dolor sit amet consectetur. Pulvinar non nulla pulvinar elementum risus. Arcu aliquam aliquet augue orci amet elit eu in viverra. Mauris quam nulla massa molestie at enim urna neque gravida. Malesuada nisi neque ut pharetra.",
          lastUpdated: "2021-10-01",
          publishingDate: "2021-10-01",
        },
        {
          id: "b67c1a2e",
          collection: "Transactions",
          description:
            "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
          lastUpdated: "2021-11-15",
          publishingDate: "2021-11-15",
        },
        {
          id: "c89d4b3f",
          collection: "Customers",
          description:
            "Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.",
          lastUpdated: "2021-12-01",
          publishingDate: "2021-12-01",
        },
        {
          id: "d90e6c4g",
          collection: "Orders",
          description:
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.",
          lastUpdated: "2022-01-20",
          publishingDate: "2022-01-20",
        },
        {
          id: "e12f7d5h",
          collection: "Invoices",
          description:
            "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.",
          lastUpdated: "2022-02-14",
          publishingDate: "2022-02-14",
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

export default DictionaryTable;
