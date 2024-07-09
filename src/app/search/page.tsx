"use client";

import { FC, useEffect, useState } from "react";
import UpperBar from "../components/UpperBar";
import Image from "next/image";
import search from "../../../public/icons/search.svg";
import SearchBar from "../components/ui/SearchBar";
import info from "../../../public/icons/info.svg";
import Link from "next/link";
import { FilterButton } from "../components/ui/FilterButton";
import { useSearchParams } from "next/navigation";
import DictionaryTable from "./dictionary/dictionary";
import CollectionTable from "./collection/collection";
import TableTable from "./table/table-table";

interface pageProps {}

export default function SearchPage() {
  // retriece value of q from params
  const searchParams = useSearchParams();

  // Filter enum
  enum Filter {
    Collections = "Collections",
    Tables = "Tables",
    Terms = "Terms",
  }

  const [filter, setFilter] = useState<Filter>(Filter.Collections);

  const keyword = searchParams.get("q");

  return (
    <main className="flex flex-col gap-10 p-6">
      <UpperBar breadcrumbs={[`Search results for "${keyword}"`]}>
        <Image src={search} alt="search" height={20} />
      </UpperBar>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex  gap-8 items-center">
            <div className="w-[330px]">
              <SearchBar className="" placeholder="Search" />
            </div>
            <div className="flex gap-4">
              <div className="text-base flex gap-2 items-center ">
                <Image src={info} alt="info" />
                <p className="font-semibold text-slate-500">
                  Can’t find what you’re looking for?
                </p>
                <Link
                  href="/request"
                  className="font-bold text-slate-900 underline"
                >
                  Request data.
                </Link>
              </div>
            </div>
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
        </div>
        <div>
          {filter === Filter.Collections ? (
            <DictionaryTable />
          ) : filter === Filter.Tables ? (
            <CollectionTable />
          ) : filter === Filter.Terms ? (
            <TableTable />
          ) : null}
        </div>
      </div>
    </main>
  );
}
