import { cn } from "@/app/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { FC } from "react";
import eye from "../../../../public/icons/eye-off.svg";
import check from "../../../../public/icons/check.svg";

const statusVariants = cva(
  "flex items-center px-3 py-1 gap-1 rounded-full font-semibold",
  {
    variants: {
      variant: {
        published: "bg-emerald-100 text-emerald-700 ",
        hidden: "bg-slate-100 text-slate-600",
      },
    },
  }
);

interface StatusProps extends VariantProps<typeof statusVariants> {
  className?: string;
}

const Status: FC<StatusProps> = ({ variant, className }) => {
  return (
    <div className={cn(statusVariants({ variant, className }))}>
      <Image
        src={variant === "published" ? check : eye}
        alt="search"
        className="w-4 h-4"
      />
      <span>{variant === "published" ? "Published" : "Hidden"}</span>
    </div>
  );
};

export default Status;
