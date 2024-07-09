import Image from "next/image";
import Link from "next/link";
import error from "../../public/404.svg";
import UpperBar from "./components/UpperBar";
import errorIcon from "../../public/icons/x-circle.svg";
import { Button } from "./components/ui/Button";

export default function NotFound() {
  return (
    <main className="w-full  slate-900 p-6 flex flex-col gap-10">
      <UpperBar breadcrumbs={["Page not found"]}>
        <Image src={errorIcon} alt="404" width={20} />
      </UpperBar>

      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <Image src={error} alt="404" />
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Return to dictionary</Button>
        </Link>
      </div>
    </main>
  );
}
