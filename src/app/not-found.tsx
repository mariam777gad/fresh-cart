import Link from "next/link";
import {
  Home,
  ArrowLeft,
  ShoppingCart,
  Leaf,
  Apple,
  Citrus,
  Carrot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
interface NotFoundLink {
  title: string;
  link: string;
  style: string;
}

const myLinksBtn: NotFoundLink[] = [
  {
    title: "All Products",
    link: "/shop",
    style: "bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#15803D]",
  },
  {
    title: "Categories",
    link: "/category",
    style: "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#364153]",
  },

  {
    title: "Today's Deals",
    link: "/deals",
    style: "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#364153]",
  },
  {
    title: "Contact Us",
    link: "/contactus",
    style: "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#364153]",
  },
];

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#FAFBFC] overflow-hidden px-4 ">
      <div className="absolute inset-0 pointer-events-none ">
        <div className="absolute top-50 left-[15%] opacity-20 rotate-12">
          <Apple size="30" className="text-[#4CAE4C] fill-[#BBF7D0] " />
        </div>
        <div className="absolute bottom-40 right-[15%] opacity-20 -rotate-45 text-2xl">
          <Leaf size="30" className="text-[#4CAE4C] fill-[#BBF7D0] " />
        </div>
        <div className="absolute bottom-70 left-[5%] opacity-20 -rotate-45 text-2xl">
          <Citrus size="30" className="text-[#4CAE4C] fill-[#BBF7D0] " />
        </div>
        <div className="absolute top-40 right-[15%] opacity-20 -rotate-45 text-2xl">
          <Carrot size="30" className="text-[#4CAE4C] fill-[#BBF7D0] " />
        </div>
      </div>

      <div className="z-10 text-center max-w-2xl mt-40">
        <div className="relative inline-block mb-8">
          <div className="bg-white py-8 px-15 rounded-3xl shadow-sm border border-gray-100">
            <ShoppingCart
              className="w-24 h-24 text-[#4ADE80] fill-[#4ADE80]"
              strokeWidth={1.5}
            />
          </div>

          <div className="absolute -top-4 -right-9 bg-[#16A34A]  text-white font-bold text-2xl w-20 h-20 flex items-center justify-center rounded-full border-4 border-white shadow-lg">
            404
          </div>
        </div>

        <div className="flex justify-center gap-1 mb-6">
          <div className="w-4 h-4 rounded-full bg-[#4ADE80]"></div>
          <div className="w-8 h-5 border-b-3 border-[#4ADE80] rounded-full"></div>
          <div className="w-4 h-4 rounded-full bg-[#4ADE80]"></div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#131B2B] mb-4">
          Oops! Nothing Here
        </h1>

        <p className="text-[#6A7282] font-medium text-lg mb-10 max-w-md mx-auto">
          Looks like this page went out of stock! Don't worry, there's plenty
          more fresh content to explore.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-7 rounded-lg text-xl font-bold transition-all">
              <Home className="mr-2 h-5 w-5" /> Go to Homepage
            </Button>
          </Link>

          <Link href="/">
            <Button
              variant="outline"
              className="bg-white border-gray-200 px-8 py-7 text-[#364153] rounded-xl text-xl font-bold hover:bg-gray-50 transition-all"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
            </Button>
          </Link>
        </div>

        <div className="mt-20 border-2 mb-10 border-gray-100 rounded-3xl">
          <div className="bg-white px-10 py-8 rounded-2xl flex flex-wrap flex-col justify-center gap-2">
            <p className="text-sm font-medium uppercase  text-gray-400 mb-4">
              Popular Destinations
            </p>
            <div>
              {" "}
              {myLinksBtn.map((e) => (
                <Link href={e.link} key={e.title}>
                  <Button
                    variant="ghost"
                    className={` font-semibold text-sm px-4 ${e.style}`}
                  >
                    {e.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
