import React from "react";
import { User } from "lucide-react";
import ProfileAside from "@/components/ProfileAside/ProfileAside";
import Link from "next/link";

export default function ProfileSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FBFCFD] mt-27">
      <div className="bg-gradient-to-tr from-[#17A54B] to-[#3DD574] py-14 mt-18 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm opacity-80 text-gray-200 font-medium mb-4">
            <Link href="/">
              <span className="hover-text-white">Home </span>
            </Link>
            / <span className="text-white"> My Account</span>
          </p>
          <div className="flex items-center gap-5">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <User size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">My Account</h2>
              <p className="text-base opacity-90">
                Manage your addresses and account settings
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 mt-8 pb-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ProfileAside />
          <section className="lg:col-span-9 space-y-6">{children}</section>
        </div>
      </main>
    </div>
  );
}
