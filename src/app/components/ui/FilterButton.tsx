import { cn } from "@/app/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const filterButtonVariants = cva(
  "flex flex-col items-center px-3 py-2 gap-2 rounded-full font-bold text-slate-600",
  {
    variants: {
      variant: {
        default: "bg-slate-100",
        selected: "bg-slate-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface FilterButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filterButtonVariants> {
  asChild?: boolean;
  className?: string;
}

const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(filterButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
FilterButton.displayName = "Filter Button";

export { FilterButton, filterButtonVariants };
