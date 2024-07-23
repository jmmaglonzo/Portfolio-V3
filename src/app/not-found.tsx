import { Button } from "@/components/ui/button";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="container flex h-dvh flex-col items-center justify-center gap-4 text-center">
      <article className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold md:text-3xl">There was a problem.</h2>
        <p className="text-sm md:text-xl">
          We could not find the page you were looking for.
        </p>
      </article>

      <CustomButton>
        <Link href={"/"} className="font-medium">
          Go back
        </Link>
      </CustomButton>
    </main>
  );
};

export default NotFound;
