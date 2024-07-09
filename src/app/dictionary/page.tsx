import Image from "next/image";
import UpperBar from "../components/UpperBar";
import { Dictionary, columns } from "./columns";
import { DataTable } from "./data-table";
import dictionary from "../../../public/icons/book-open.svg";

async function getData(): Promise<Dictionary[]> {
  // Fetch data from your API here.
  return [
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
    {
      id: "f34g8e6i",
      collection: "Payments",
      description:
        "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
      lastUpdated: "2022-03-10",
      publishingDate: "2022-03-10",
    },
    {
      id: "g56h9f7j",
      collection: "Shipping",
      description:
        "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.",
      lastUpdated: "2022-04-05",
      publishingDate: "2022-04-05",
    },
    {
      id: "h78i0g8k",
      collection: "Returns",
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.",
      lastUpdated: "2022-05-02",
      publishingDate: "2022-05-02",
    },
    {
      id: "i90j1h9l",
      collection: "Reviews",
      description:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      lastUpdated: "2022-06-18",
      publishingDate: "2022-06-18",
    },
    {
      id: "j12k2i0m",
      collection: "Products",
      description:
        "Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.",
      lastUpdated: "2022-07-25",
      publishingDate: "2022-07-25",
    },
    {
      id: "k34l3j1n",
      collection: "Categories",
      description:
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.",
      lastUpdated: "2022-08-12",
      publishingDate: "2022-08-12",
    },
  ];
}

export default async function DictionaryPage() {
  const data = await getData();
  const breadcrumbs = ["Dictionary"];

  return (
    <main className=" w-full  slate-900 p-6 flex flex-col gap-10">
      <UpperBar breadcrumbs={breadcrumbs}>
        <Image src={dictionary} alt="dictionary" width={20} />
      </UpperBar>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
