import { Truck, ShieldCheck, Star, Facebook, StarIcon } from "lucide-react";
import interview from "@images/review-author.png";
import Image from "next/image";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
export default function page() {
  return (
    <main className="min-h-screen  bg-[#FFFFFF] flex items-center justify-center p-4 md:p-12 ">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-9  mt-20">
        <div className="w-full h-full flex flex-col space-y-8 lg:space-y-8">
          <section className="space-y-4">
            <h1 className="text-lg lg:text-4xl font-bold text-[#364153] tracking-tight">
              Welcome to <span className="text-[#16A34A]">FreshCart</span>
            </h1>
            <p className="text-[#364153] text-lg lg:text-xl font-medium max-w-xl">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
          </section>

          <div className="space-y-6 lg:space-y-6">
            <div className="flex items-start gap-5">
              <div className="bg-[#BBF7D0] p-3 rounded-full shrink-0 flex items-center justify-center">
                <StarIcon
                  size={22}
                  className="text-[#16A34A]"
                  fill="currentColor"
                />
              </div>
              <div>
                <h3 className="text-[#364153] font-semibold text-lg">
                  Premium Quality
                </h3>
                <span className="text-[#4A5565] text-base font-medium">
                  Premium quality products sourced from trusted suppliers.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-[#BBF7D0] p-3 rounded-full shrink-0 flex items-center justify-center">
                <Truck size={22} className="text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-[#364153] font-semibold text-lg ">
                  Fast Delivery
                </h3>
                <span className="text-[#4A5565] text-base font-medium">
                  Same-day delivery available in most areas.
                </span>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-[#BBF7D0] p-3 rounded-full shrink-0 flex items-center justify-center">
                <ShieldCheck size={22} className="text-[#16A34A]" />
              </div>
              <div>
                <h3 className="text-[#364153] font-semibold text-lg">
                  Secure Shopping
                </h3>
                <span className="text-[#4A5565] text-base font-medium">
                  Your data and payments are completely secure.
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white w-full p-5 rounded-md shadow-sm ">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image src={interview} alt="interview" />
              </div>
              <div>
                <h4 className="font-normal text-[#1a1a1a] mb-1">
                  Sarah Johnson
                </h4>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((e, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#FFDF20] text-[#FFDF20]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[#4A5565] italic font-medium text-base">
              "FreshCart has transformed my shopping experience. The quality of
              the products is outstanding, and the delivery is always on time.
              Highly recommend!"
            </p>
          </div>
        </div>

        <div className="w-2xl bg-white p-5 lg:p-8 rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.06)] ">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-[#364153] mb-2">
              Create Your Account
            </h2>
            <p className="text-[#364153] font-medium">
              Start your fresh journey with us today
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-8">
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-1.5 px-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base">
              <span className="text-xl text-[#E7000B] font-bold">G</span>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-1.5 px-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-base">
              <Facebook
                className="w-5 h-5 text-[#1877F2]"
                fill="currentColor"
              />
              Facebook
            </button>
          </div>
          <div className="relative flex items-center mb-2">
            <div className="grow border-t-2 border-gray-100"></div>
            <span className="px-4 text-[#364153] text-base font-medium ">
              or
            </span>
            <div className="grow border-t-2 border-gray-100"></div>
          </div>
          <RegisterForm />
          <p className="text-center text-[#364153] pb-7 pt-9 text-base font-medium border-t  ">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#2bb673] font-bold cursor-pointer hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
