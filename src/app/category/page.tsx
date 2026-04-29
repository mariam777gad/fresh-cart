import { Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import getAllCategories from "./category.services";
import Link from "next/link";

export default async function page() {
  const allCategories = await getAllCategories();
  //console.log(allCategories);

  return (
    <div className="bg-gray-50 mt-18 min-h-screen">
      <div className="bg-gradient-to-r from-[#12A54A] via-[#00CB54] to-[#04DE71] mt-27  w-full text-white py-15 px-30 ">
        <div className="max-w-7xl mx-auto ">
          <nav className="flex items-center gap-2 text-sm mb-6 opacity-90">
            <Link href="/">
              <span>Home</span>
            </Link>
            <span className="text-[10px]">/</span>
            <span className="font-medium">Categories</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
              <Layers className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                All Categories
              </h1>
              <p className="text-white/80 text-base mt-1">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 my-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {allCategories.map((category) => (
            <Link key={category._id} href={`specificCat/${category._id}`}>
              {" "}
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer rounded-xl overflow-hidden ">
                <CardContent className="p-0 h-60  flex items-center justify-center flex-col">
                  <div className="bg-[#f8f9fa] p-2 rounded-2xl w-50 h-45 overflow-hidden  ">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-auto object-contain rounded-2xl mix-blend-multiply scale-110 transition-transform duration-300 hover:scale-125"
                    />
                  </div>

                  <div className="py-4 text-center">
                    <span className="text-base font-bold text-[#101828]">
                      {category.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
