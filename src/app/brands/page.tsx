import { Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { getAllBrands } from "./brands.service";

export default async function page() {
  const allBrands = await getAllBrands();
  // console.log(allBrands);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#6332ed] text-white py-15 px-30  mt-27 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-6 opacity-80">
            <Link href="/">
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <span className="text-[10px]">/</span>
            <span className="font-medium">Brands</span>
          </nav>
<div></div>
          <div className="flex items-center gap-5">
            <div className="bg-white/15 p-4 rounded-[1.2rem] backdrop-blur-md border border-white/10 shadow-xl">
              <Tag className="w-9 h-9 text-white rotate-90" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">
                Top Brands
              </h1>
              <p className="text-white/70 text-base mt-1 font-medium">
                Shop from your favorite brands
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-20">
        <div className="grid grid-cols-2 my-20 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {allBrands.map((brand) => (
            <Link href={`/specificbrand/${brand._id}`} key={brand._id}>
              {" "}
              <div
                key={brand._id}
                className="group border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg pb-7 overflow-hidden bg-white"
              >
                <CardContent className="p-0">
                  <div className="  flex items-center justify-center  transition-colors group-hover:bg-gray-50/50">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-auto p-4 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  <div className="text-center bg-white">
                    <span className="text-[13px] font-bold text-gray-400 group-hover:text-[#6332ed] transition-colors uppercase tracking-wider">
                      {brand.name}
                    </span>
                  </div>
                </CardContent>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
