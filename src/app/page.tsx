import { Search } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./components/ui/Breadcrumb";
import { Button } from "./components/ui/Button";
import SearchBar from "./components/ui/SearchBar";
import Status from "./components/ui/Status";
import Divider from "./components/ui/Divider";
import { FilterButton } from "./components/ui/FilterButton";
import Input from "./components/ui/Input";
import DialogHeader from "./components/ui/DialogHeader";

export default function Home() {
  return (
    <main className="h-full w-full  slate-900 ">
      <Button variant="red">Button</Button>
      <Button variant="inactive">Button</Button>
      <SearchBar placeholder="Search CIH Data" />
      <h1>Hello</h1>
      <div className="flex">
        <Status variant="hidden" />
        <Status variant="published" />
      </div>
      <Divider />
      <FilterButton variant="default">Collection</FilterButton>
      <FilterButton variant="selected">Collection</FilterButton>
      <div className="w-1/4">
        <Input label="Field label" placeholder="Full Name" />
        <Input label="Field label" placeholder="Full Name" />
        <Input textarea label="Field label" placeholder="Full Name" />
      </div>
      <div className=" w-1/4">
        <DialogHeader title="Dialog Title" description="Hello world." />
      </div>
    </main>
  );
}
