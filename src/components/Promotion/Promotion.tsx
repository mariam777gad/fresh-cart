import {
  Mail,
  Smartphone,
  ArrowRight,
  Star,
  Truck,
  Leaf,
  Tag,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Promotion() {
  return (
    <div className=" container bg-gradient-to-tl from-[#EDFDF6] via-white to-[#F1FDFA] mx-auto my-15 shadow-lg shadow-green-300/20  py-2 px-6 rounded-2xl">
      <div className="  rounded-2xl grid grid-cols-1 md:grid-cols-12   mx-auto items-center ">
        <div className=" lg:col-span-8  rounded-[2rem] p-8 md:p-12 flex flex-col justify-center ">
          <div className="border-r border-green-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-[#00BC7D] to-[#00BBA7] p-4 text-white rounded-xl flex items-center justify-center">
                <Mail className=" w-6 h-6 " />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#009966] uppercase ">
                  Newsletter
                </p>
                <p className="text-xs text-[#6A7282] font-medium">
                  50,000+ subscribers
                </p>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#101828] mb-2 ">
              Get the Freshest Updates
            </h2>
            <h2 className="text-4xl md:text-4xl font-bold text-[#009966] mb-6 ">
              Delivered Free
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-lg font-medium">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-green-200 shadow-sm">
                <div className="w-8 h-8 bg-[#D0FAE5] rounded-full flex items-center justify-center">
                  <span className="text-[#009966] text-[10px]">
                    <Leaf size={15} />
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Fresh Picks Weekly
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-green-200  shadow-sm">
                <div className="w-8 h-8 bg-[#D0FAE5] rounded-full flex items-center justify-center">
                  <span className="text-[#009966] text-sm">
                    <Truck size={15} />
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Free Delivery Codes
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-green-200  shadow-sm">
                <div className="w-8 h-8 bg-[#D0FAE5] rounded-full flex items-center justify-center">
                  <span className="text-[#009966] text-[10px]">
                    <Tag size={15} />
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Members-Only Deals
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mb-4">
              <Input
                type="email"
                placeholder="you@example.com"
                className="h-14  py-2 rounded-xl border-2 border-gray-200 bg-white text-gray-900 shadow-sm"
              />
              <Button className="h-14 py-2 px-8 bg-[#10b981] bg-gradient-to-r from-[#009F6A] to-[#00B97B] hover:bg-[#0d9469] text-base text-white font-bold rounded-xl flex items-center gap-2">
                Subscribe <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-[#99A1AF] font-medium flex items gap-1 ">
              <Sparkles size={15} className="fill-yellow-200 text-gray-600" />
              <span>Unsubscribe anytime. No spam, ever.</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-4  rounded-[2rem]  flex flex-col justify-between text-white ">
          <div className="bg-gradient-to-r from-[#101828]  to-[#1E2939] py-6 px-7 rounded-2xl">
            <div className="flex items-center gap-2 mb-8 bg-[#0E3B3B] border border-green-700 w-fit py-1 px-2 rounded-full">
              <Smartphone className="w-4 h-4 text-[#10b981]" />
              <span className="text-xs font-medium  uppercase text-[#00D492]">
                Mobile App
              </span>
            </div>

            <h3 className="text-2xl bg font-bold mb-4 ">
              Shop Faster on Our App
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Get app-exclusive deals & 15% off your first order.
            </p>

            <div className="space-y-3">
              <button className="w-full flex items-center gap-4 border border-[#4B515E] bg-[#313A49] hover:bg-[#3A4351] py-3 px-4 rounded-xl transition-all group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg
                    viewBox="0 0 384 512"
                    className="w-full h-full fill-white"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-20.8-83.6-20.1-42.9.6-82.7 25.1-104.6 63.9-44.3 78.4-11.3 194.5 31.5 257.3 20.9 30.1 46.1 63.9 78.1 62.6 31.1-1.3 42.7-20.3 80.5-20.3 37.8 0 48.4 20.3 81.1 19.7 33.4-.6 55.2-30.5 75.9-60.6 24-35.1 33.9-69.1 34.2-71-.8-.3-65.7-25.3-65.9-100.8zM285.4 100.5c16.1-19.5 27.3-46.7 24.5-74-23.3 1-51.7 15.5-68.5 35.1-15 17.5-28.1 45.4-24.5 71.8 26.1 2 52.4-13.4 68.5-32.9z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs text-gray-400 uppercase">
                    Download on
                  </span>
                  <span className="block text-sm  font-bold text-white">
                    App Store
                  </span>
                </div>
              </button>

              <button className="w-full flex items-center gap-4 border border-[#4B515E] bg-[#313A49] hover:bg-[#3A4351] py-3 px-4 rounded-xl  transition-all group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg
                    viewBox="0 0 512 512"
                    className="w-full h-full fill-white"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 18-28.7 0-38.8zm-147.1 101l-280.8 161.2L325.3 277.7l-5.1-5.1z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs text-gray-400 uppercase leading-none mb-1">
                    Get it on
                  </span>
                  <span className="block text-sm font-bold text-white">
                    Google Play
                  </span>
                </div>
              </button>
            </div>

            <div className="mt-4 py-4  flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-[#FDC700] text-[#FDC700]"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-400 font-medium ">
                4.9 • 100K+ downloads
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
