"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";
import searchIcon from "../../../../public/icons/search-bar-icon.svg";
import Image from "next/image";
import { Button } from "./Button";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogClose } from "./Dialog";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({ className, placeholder }) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    console.log(value);
  }, [value]);

  const router = useRouter();

  const handleSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") return;
    else {
      // Redirect to /search?q=value*
      router.push("/search?q=" + value);
    }
  };
  return (
    <form className="flex gap-1 w-full" onSubmit={handleSearch}>
      <div
        className={cn(
          "flex gap-1.5 p-1 bg-slate-50 w-60 h-10 rounded-lg outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 ",
          className
        )}
      >
        <Image src={searchIcon} alt="search" className="w-8 h-8" />
        <input
          type="text"
          required
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-slate-50 text-black placeholder:text-slate-400 outline:none focus:outline-none"
        />
      </div>
      <Button variant={value === "" ? "inactive" : "default"} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
