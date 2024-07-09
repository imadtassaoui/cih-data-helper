"use client";

import { cn } from "@/app/lib/utils";
import { ChangeEvent, FC, useEffect, useState } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  label?: string;
  value?: string;
  textarea?: boolean;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = ({
  placeholder,
  label,
  value,
  textarea,
  className,
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event.target.value);
  };
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <label className="font-bold text-slate-500">{label}</label>}
      {textarea ? (
        <textarea
          className="px-2 h-48 min-h-16 font-semibold py-2 rounded-lg outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-slate-50 text-black placeholder:text-slate-400 "
          placeholder={placeholder}
          value={value}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            handleTextAreaChange(event)
          }
        />
      ) : (
        <input
          className="px-2 font-semibold py-2 rounded-lg outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-slate-50 text-black placeholder:text-slate-400 "
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event)
          }
        />
      )}
    </div>
  );
};

export default Input;
