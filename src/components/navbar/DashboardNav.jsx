"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserButton from "./UserButton";
import { Suspense } from "react";

const DashboardNav = () => {
  const { data } = useSession();

  return (
    <nav className="fixed top-0 border-b w-full z-20 bg-[#edf0f8] shadow-lg shadow-primary/30">
      <div className="w-full py-3 px-8 md:px-24 xl:px-32 data-between">
        <Link href="/">
          <div className="text-3xl md:text-4xl font-[futura] tracking-wide cursor-pointer">
            Infinity
          </div>
        </Link>
        <Suspense
          fallback={
            <p className="h-8 w-8 bg-black-100 rounded-full overflow-hidden"></p>
          }
        >
          <div className="relative">{data && <UserButton />}</div>
        </Suspense>
      </div>
    </nav>
  );
};

export default DashboardNav;
