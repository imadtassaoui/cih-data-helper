"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface LinkButtonProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  search?: boolean;
  disabled?: boolean;
}

const link: FC<LinkButtonProps> = ({
  label,
  children,
  className,
  search,
  disabled,
}) => {
  const router = usePathname();
  const [pageName, setPageName] = useState<string>("");

  useEffect(() => {
    const pageName = router.split("/")[1];
    console.log(pageName);
    setPageName(pageName);
  }, [router]);

  return search ? (
    <div className="flex w-full gap-2 items-center self-stretch px-3 py-2 rounded-lg text-base font-bold hover:bg-slate-200 hover:transition-colors duration-300 ease-in-out relative">
      {children}
      <span>{label}</span>
      {/* <span className="h-3 w-1 rounded-2xl bg-slate-900 absolute -right-0.5 top-auto" /> */}
    </div>
  ) : disabled ? (
    <div className="flex w-full gap-2 items-center self-stretch px-3 py-2 rounded-lg text-base font-bold cursor-not-allowed relative opacity-40">
      {children}
      <span>{label}</span>
    </div>
  ) : (
    <Link
      href={`/${label.toLowerCase()}`}
      className={`flex w-full gap-2 items-center self-stretch px-3 py-2 rounded-lg text-base font-bold hover:bg-slate-200 hover:transition-colors duration-300 ease-in-out relative ${
        pageName === label.toLowerCase() ? "bg-slate-200" : ""
      }`}
    >
      {children}
      <span>{label}</span>
      {pageName === label.toLowerCase() ? (
        <span className="h-3 w-1 rounded-2xl bg-slate-900 absolute -right-0.5 top-auto" />
      ) : null}
    </Link>
  );
};

export default link;
