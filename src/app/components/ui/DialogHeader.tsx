import Image from "next/image";
import { FC } from "react";
import closeIcon from "../../../../public/icons/close-icon.svg";
import Divider from "./Divider";

interface DialogHeaderProps {
  title?: string;
  description?: string;
}

const DialogHeader: FC<DialogHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        {/* <Image
          src={closeIcon}
          alt="close icon"
          width={28}
          height={28}
          className="cursor-pointer"
        /> */}
      </div>
      <Divider />
      <p className="text-slate-500 ">{description}</p>
    </div>
  );
};

export default DialogHeader;
