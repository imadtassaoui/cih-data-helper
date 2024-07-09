"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import logo from "../../../public/tool-logo.svg";
import LinkButton from "./ui/LinkButton";
//icons
import search from "../../../public/icons/search.svg";
import dictionary from "../../../public/icons/book-open.svg";
import link from "../../../public/icons/link.svg";
import question from "../../../public/icons/alert-circle.svg";
import settings from "../../../public/icons/settings.svg";
import tool from "../../../public/icons/tool.svg";
import {
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/Dialog";
import { Button } from "./ui/Button";
import SearchBar from "./ui/SearchBar";
import DialogHeader from "./ui/DialogHeader";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const [keyword, setKeyword] = useState<string>("");
  const handleInputChange = (newValue: string) => {
    setKeyword(newValue);
  };

  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  const handleSearch = () => {};
  return (
    <div className="w-[280px] sticky top-0 h-screen px-4 py-8 bg-slate-100   flex flex-col gap-16">
      <Image src={logo} alt="logo" className="pl-3" height={28} />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="pl-3 slate-500 tracking-[0.6px] uppercase font-bold text-xs text-slate-500 inter">
            Dashboard
          </h2>
          <div className="flex flex-col gap-1">
            <Dialog>
              <DialogTrigger>
                <LinkButton search label="Search">
                  <Image src={search} alt="search" height={20} />
                </LinkButton>{" "}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader
                  title="Search CIH Data"
                  description="You can search for a collection, table or field."
                />
                <div className="flex gap-1 w-full">
                  <SearchBar placeholder="Search CIH Data" className="w-full" />
                </div>
              </DialogContent>
            </Dialog>

            <LinkButton label="Dictionary">
              <Image src={dictionary} alt="dictionary" height={20} />
            </LinkButton>
            <LinkButton label="Request">
              <Image src={question} alt="request" height={20} />
            </LinkButton>
            <LinkButton disabled label="Data lineage" className="opacity-20">
              <Image src={link} alt="data lineage" height={20} />
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="pl-3 slate-500 tracking-[0.6px] uppercase font-bold text-xs text-slate-500 inter">
            Paramètres et support
          </h2>
          <div className="flex flex-col gap-1">
            <LinkButton label="Settings">
              <Image src={settings} alt="settings" height={20} />
            </LinkButton>
            <LinkButton label="Support">
              <Image src={tool} alt="Support" height={20} />
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
