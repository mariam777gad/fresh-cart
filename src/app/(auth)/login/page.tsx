import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  ShieldCheck,
  Headphones,
  Lock,
  Users,
  Star,
} from "lucide-react";

import { CardContent } from "@/components/ui/card";
import LoginForm from "./LoginForm";
import cart from "@images/cart.png";
export default function page() {
  return (
    <main className="min-h-screen  bg-[#FFFFFF] flex items-center justify-center p-4 md:p-12 ">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-20">
        <div className="  flex flex-col items-center  text-center space-y-4">
          <div className="relative w-full aspect-[4/3] rounded-2xl  mb-6 flex items-center justify-center">
            <Image
              src={cart}
              alt="Shopping cart with fresh products"
              fill
              className="object-cover w-full h-full rounded-3xl scale-y-95"
              priority
            />
          </div>

          <div className="mt-3 ">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-3 ">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>
            <p className="text-[#4A5565] text-lg font-medium">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>
          </div>

          <div className="md:flex  gap-6 w-full max-w-lg">
            <div className="flex  items-center gap-3 sm:gap-1.5 bg-white sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-gray-100 sm:border-none">
              <div className=" rounded-full shrink-0 flex items-center justify-center">
                <Truck size={15} className="text-[#2bb673]" />
              </div>
              <p className=" text-[#6A729E] font-medium text-sm tracking-tight text-center whitespace-nowrap">
                Free Delivery
              </p>
            </div>
            <div className="flex  items-center gap-3 sm:gap-1.5 bg-white sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-gray-100 sm:border-none">
              <div className=" p-3 rounded-full shrink-0 flex items-center justify-center">
                <ShieldCheck size={15} className="text-[#2bb673]" />
              </div>
              <p className="font-medium text-[#6A729E]  text-sm tracking-tight text-center whitespace-nowrap">
                Secure Payment
              </p>
            </div>
            <div className="flex items-center gap-3 sm:gap-1.5 bg-white sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-gray-100 sm:border-none">
              <div className=" p-3 rounded-full shrink-0 flex items-center justify-center">
                <Headphones size={15} className="text-[#2bb673]" />
              </div>
              <p className="font-medium text-[#6A729E]  text-sm tracking-tight text-center whitespace-nowrap">
                24/7 Support
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2.5rem]  shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100">
          <CardContent className="p-10 lg:p-12 space-y-10">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center  text-3xl font-bold text-[#1E2939]">
                <span className="text-[#16A34A]">Fresh</span>
                <span>Cart</span>
              </div>
              <h1 className="text-2xl font-bold text-[#1E2939] mt-3">
                Welcome Back!
              </h1>
              <p className="text-gray-500 font-medium">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

            <LoginForm />

            <p className="text-center text-gray-500 font-medium text-sm border-t border-gray-100 pt-6">
              New to FreshCart?{" "}
              <Link
                href="/register"
                className="text-[#2bb673] font-bold hover:underline"
              >
                Create an account
              </Link>
            </p>

            <div className="flex items-center justify-evenly w-sm mx-auto ">
              <div className="flex items-center gap-1.5 text-gray-500">
                <Lock size={14} className="text-[#6a7282]" />
                <span className="text-[11px] font-medium uppercase tracking-wider">
                  SSL Secured
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-gray-500">
                <Users size={14} className="text-[#6a7282] fill-[#6a7282]" />
                <span className="text-[11px] font-medium uppercase tracking-wider">
                  50K+ Users
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-gray-500">
                <Star size={14} className="text-[#6a7282] fill-[#6a7282]" />
                <span className="text-[11px] font-medium uppercase tracking-wider">
                  4.9 Rating
                </span>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </main>
  );
}
