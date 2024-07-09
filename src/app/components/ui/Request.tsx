import { FC } from "react";

interface RequestProps {}

const Request: FC<RequestProps> = ({}) => {
  return (
    <div className="w-[calc(50%-12px)] flex flex-col gap-4 p-3 bg-slate-50 outline outline-slate-200 rounded-lg">
      <div className="flex flex-col">
        <h3 className="font-bold">Request made by</h3>
        <p>Imad Tassaoui</p>
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold">Data name</h3>
        <p>ds_a</p>
      </div>

      <div className="flex flex-col">
        <h3 className="font-bold">Data message</h3>
        <p>I need to know what this field mean in db_users</p>
      </div>
      <input
        placeholder="Reply to request"
        className="w-full px-2 font-semibold py-2 rounded-lg outline outline-1 outline-slate-300 focus:outline-2 focus:outline-slate-400 bg-slate-50 text-black placeholder:text-slate-400 "
      />
    </div>
  );
};

export default Request;
