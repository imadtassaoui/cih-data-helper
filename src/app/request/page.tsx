"use client";

import { FC, useEffect, useState } from "react";
import Input from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import UpperBar from "../components/UpperBar";
import Image from "next/image";
import questionMark from "../../../public/icons/alert-circle.svg";
import info from "../../../public/icons/info.svg";
import { FilterButton } from "../components/ui/FilterButton";
import { toast, Toaster } from "sonner";
import Request from "../components/ui/Request";
import { useSearchParams } from "next/navigation";
import DictionaryTable from "../search/dictionary/dictionary";
import CollectionTable from "../search/collection/collection";
import TableTable from "../search/table/table-table";
import { useRouter } from "next/navigation";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [stepperValue, setStepperValue] = useState<number>(0);

  useEffect(() => {
    console.log(inputValue, textAreaValue);
  }, [inputValue, textAreaValue]);

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };
  const handleTextAreaChange = (newValue: string) => {
    setTextAreaValue(newValue);
  };

  const router = useRouter();

  const sendToSearch = () => {
    if (inputValue !== "" && textAreaValue !== "") {
      setStepperValue(1);
      router.push("/request?q=" + inputValue);
    }
  };

  const sendToRequest = () => {
    setStepperValue(0);
    toast.success("Request sent successfully");
    setInputValue("");
    setTextAreaValue("");
  };
  const searchParams = useSearchParams();

  // Filter enum
  enum Filter {
    Collections = "Collections",
    Tables = "Tables",
    Terms = "Terms",
  }

  const [filter, setFilter] = useState<Filter>(Filter.Collections);

  const breadcrumbs = ["Request"];
  return (
    <div className="p-6 flex flex-col gap-10">
      <UpperBar breadcrumbs={breadcrumbs}>
        <Image src={questionMark} alt="profile" width={20} />
      </UpperBar>
      {stepperValue === 0 && (
        <div className="flex gap-24 ">
          <div className="w-[600px] flex flex-col gap-6 items-start">
            <h2>Make request</h2>

            <Input
              label="Data name"
              placeholder="Search data"
              className="w-full"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Input
              textarea
              label="Request message"
              placeholder="Type your request message in here"
              className="w-full"
              value={textAreaValue}
              onChange={handleTextAreaChange}
            />
            <Button
              variant={
                inputValue !== "" && textAreaValue !== ""
                  ? "default"
                  : "inactive"
              }
              className=""
              onClick={sendToSearch}
            >
              Send request
            </Button>
          </div>
          <div className="flex flex-col gap-6 items-start w-full">
            <h2>Active requests</h2>
            <div className="flex flex-wrap gap-6 w-full">
              <Request />
              <Request />
              <Request />
              <Request />
            </div>
          </div>
        </div>
      )}
      {stepperValue === 1 && (
        <div className=" flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <div className="flex gap-2 items-center">
                <Image src={info} alt="info" width={20} />
                <p className="font-semibold">
                  {`We searched and some results were found for "${inputValue}"`}
                </p>
              </div>
              <Button onClick={sendToRequest}>Request anyway</Button>
            </div>
            <div className="flex gap-2">
              <FilterButton
                onClick={() => setFilter(Filter.Collections)}
                variant={filter === Filter.Collections ? "selected" : "default"}
              >
                Collections
              </FilterButton>
              <FilterButton
                onClick={() => setFilter(Filter.Tables)}
                variant={filter === Filter.Tables ? "selected" : "default"}
              >
                Tables
              </FilterButton>
              <FilterButton
                onClick={() => setFilter(Filter.Terms)}
                variant={filter === Filter.Terms ? "selected" : "default"}
              >
                Terms
              </FilterButton>
            </div>
            <div className="">
              {filter === Filter.Collections ? (
                <DictionaryTable />
              ) : filter === Filter.Tables ? (
                <CollectionTable />
              ) : filter === Filter.Terms ? (
                <TableTable />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
