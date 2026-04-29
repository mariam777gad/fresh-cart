import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bold, Flame, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <Card className="relative overflow-hidden border-none bg-gradient-to-r from-green-600 via-main-color to-green-800  p-8  flex flex-col justify-center text-white">
          <div className="space-y-4 relative z-10">
            <Badge className="bg-white/15 text-white border-none px-3 py-3.5 gap-1 w-fit ">
              <Flame size={15} className="text-orange-400 fill-orange-400" />
              <span className="text-sm  font-medium">Deal of the Day</span>
            </Badge>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold ">Fresh Organic Fruits</h2>
              <p className="text-white/80 text-md">
                Get up to 40% off on selected organic fruits
              </p>
            </div>

            <div className="flex items-center gap-3 py-2">
              <span className="text-3xl font-bold">40% OFF</span>
              <span className="text-md text-white/70">
                Use code: <strong className="text-white">ORGANIC40</strong>
              </span>
            </div>
            <button className="w-fit hover:bg-slate-100  bg-white  text-md font-semibold text-main-color  rounded-full px-4 py-3 ">
              <Link href="/shop" className="flex items-center gap-2">
                Shop Now
                <ArrowRight size={16} strokeWidth={3} className="mx-1 " />
              </Link>
            </button>
          </div>

          <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </Card>

        <Card className="relative overflow-hidden border-none bg-gradient-to-tr from-orange-400 to-orange-600 p-8  flex flex-col justify-center text-white">
          <div className="space-y-4 relative z-10">
            <Badge className="bg-white/15  text-white border-none px-3 py-3.5 gap-1 w-fit ">
              <Sparkles size={14} className="text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium">New Arrivals</span>
            </Badge>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold ">Exotic Vegetables</h2>
              <p className="text-white/80 text-md">
                Discover our latest collection of premium vegetables
              </p>
            </div>

            <div className="flex items-center gap-3 py-2">
              <span className="text-3xl font-bold">25% OFF</span>
              <span className="text-md text-white/70">
                Use code: <strong className="text-white">FRESH25</strong>
              </span>
            </div>
            <button>
              <Link
                href={"/shop"}
                className="w-fit bg-white text-orange-600 hover:bg-slate-100 rounded-full px-4 py-3 flex items-center gap-2 text-md font-semibold"
              >
                Explore Now
                <ArrowRight
                  size={16}
                  strokeWidth={3}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </button>
          </div>


          <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </Card>
      </div>
    </div>
  );
}
