"use client";

import Image from "next/image";
import { FC } from "react";
import logout from "../../../public/icons/log-out.svg";
import profile from "../../../public/profile.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/Breadcrumb";
import { Dialog, DialogContent, DialogTrigger } from "./ui/Dialog";
import DialogHeader from "./ui/DialogHeader";
import { Button } from "./ui/Button";
import Link from "next/link";

interface UpperBarProps {
  children?: React.ReactNode;
  breadcrumbs?: string[];
}

const UpperBar: FC<UpperBarProps> = ({ children, breadcrumbs }) => {
  return (
    <div className="w-full  flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div className="rounded-full bg-slate-100 flex items-center justify-center p-2">
          {children}
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs?.map((breadcrumb, index) => (
              <div
                className="flex gap-1 text-slate-400 last:text-slate-900"
                key={index}
              >
                <BreadcrumbSeparator className="first-of-type:hidden" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                  // href={breadcrumb.split(" /")[0].toLowerCase()}
                  >
                    {breadcrumb.charAt(0).toUpperCase() + breadcrumb.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>{" "}
      </div>
      <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors duration-300 cursor-pointer">
        <Link href="/profile" className="flex items-center gap-2 ">
          <img
            width={20}
            src="https://api.dicebear.com/8.x/initials/svg?seed=Imad Tassaoui"
            alt="profile"
            className="rounded-full gap-2"
          />
          <p className="text-base font-bold">Imad Tassaoui</p>
        </Link>
        <Dialog>
          <DialogTrigger>
            <Image
              src={logout}
              alt="logout"
              width={24}
              className="stroke-red-100 p-1 rounded-full hover:bg-red-100"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader
              title="Log Out"
              description="Are you sure you wanna logout."
            />
            <div className="flex w-full justify-end gap-1">
              <Button variant="redLink">Log Out</Button>
              <DialogTrigger>
                <Button variant="red">Cancel</Button>
              </DialogTrigger>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UpperBar;
