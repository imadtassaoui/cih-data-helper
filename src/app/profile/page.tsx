import Image from "next/image";
import { FC } from "react";
import avatar from "../../../public/profile.jpg";
import UpperBar from "../components/UpperBar";
import profile from "../../../public/icons/user.svg";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const breadcrumbs = ["Profile"];
  return (
    <main className="h-full w-full flex flex-col  gap-10 slate-900 p-6">
      <UpperBar breadcrumbs={breadcrumbs}>
        <Image src={profile} alt="profile" width={20} />
      </UpperBar>

      <div className="flex flex-col gap-12">
        <div className="flex gap-4">
          <img
            src="https://api.dicebear.com/8.x/initials/svg?seed=Imad Tassaoui"
            alt="logo"
            height={64}
            width={64}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <h1>Imad Tassaoui</h1>
            <p className="text-xl text-slate-500">Data Engineer</p>
          </div>
        </div>
        {/* <div className="flex flex-col gap-8">
          <h2>My Collections</h2>
          <div className="">//TABLE HERE</div>
        </div> */}
      </div>
    </main>
  );
};

export default page;
