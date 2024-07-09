"use client";

import { cn } from "@/app/lib/utils";
import { ChangeEvent, FC, useEffect, useState } from "react";

interface RowInputProps {
  placeholder?: string;
  className?: string;
  label?: string;
  value?: string;
  textarea?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RowInput: FC<RowInputProps> = ({
  placeholder,
  label,
  value,
  textarea,
  className,
  onChange,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [textAreaValue, setTextAreaValue] = useState<string>("");

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value);
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange && onChange(event.target.value);
  };
  return (
    <input
      className={`px-2 w-full font-semibold py-2 rounded-md outline outline-1 ${
        disabled
          ? "outline-slate-300 bg-slate-200 text-slate-500"
          : "outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-slate-50 text-black"
      } placeholder:text-slate-400`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        handleInputChange(event)
      }
      disabled={disabled}
    />
  );
};

export default RowInput;
