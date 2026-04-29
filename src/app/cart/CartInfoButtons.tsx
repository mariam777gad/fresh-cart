"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function CartInfoButtons() {
  const { data } = useSession();
  return (
    <div className="mt-8 flex  w-sm flex-col gap-3">
      <Link href="/">
        <Button className=" w-full font-bold rounded-xl py-6 bg-main-color hover:bg-green-700 text-white transition-colors">
          Browse Products
          <ArrowRight className="ms-2" />
        </Button>
      </Link>
      {!data && (
        <Button className=" w-full font-bold rounded-xl py-6 border-muted bg-gray-100 text-black  hover:bg-gray-200/60">
          Sign In
        </Button>
      )}
    </div>
  );
}
