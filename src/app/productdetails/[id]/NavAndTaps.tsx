import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Truck,
  CheckCircle2,
  RotateCcw,
  StarOff,
  ShieldBan,
  Handbag,
} from "lucide-react";

export default function NavAndTaps() {
  return (
    <div className=" max-w-7xl my-10  mx-auto  md:px-0 p-3 ">
      <Tabs
        defaultValue="details"
        className="w-full  border border-gray-200 pt-4 py-2  rounded-lg"
      >
        <div className="relative w-full border-b border-gray-200">
          <TabsList className="flex items-center gap-10 bg-transparent py-6">
            <TabsTrigger
              value="details"
              className="flex items-center gap-2 py-6   px-5 text-base text-gray-600 border-0 border-b-2 border-transparent
    data-[state=active]:border-b-green-600 
    data-[state=active]:text-green-600
    data-[state=active]:shadow-none 
    focus:ring-0 
    focus:outline-none 
    focus-visible:ring-0
    focus-visible:outline-none
    rounded-none bg-transparent"
            >
              <Handbag size={18} />
              Product Details
            </TabsTrigger>

            <TabsTrigger
              value="reviews"
              className="flex items-center gap-2 py-6 px-5  text-base text-gray-600 border-0 border-b-2 border-transparent
    data-[state=active]:border-b-green-600 
    data-[state=active]:text-green-600
    data-[state=active]:shadow-none 
    focus:ring-0 
    focus:outline-none 
    focus-visible:ring-0
    focus-visible:outline-none
    rounded-none bg-transparent"
            >
              <Star size={16} fill="currentColor" />
              Reviews (5)
            </TabsTrigger>

            <TabsTrigger
              value="shipping"
              className="flex items-center gap-2  py-6 text-base text-gray-600 border-0 border-b-2 border-transparent
    data-[state=active]:border-b-green-600 
    data-[state=active]:text-green-600
    data-[state=active]:shadow-none 
    focus:ring-0 
    focus:outline-none 
    focus-visible:ring-0
    focus-visible:outline-none
    rounded-none bg-transparent"
            >
              <Truck size={16} />
              Shipping & Returns
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="py-8">
          <TabsContent value="details" className="mt-0">
            <div className="space-y-6 px-5">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                About this Product
              </h2>
              <p className="text-gray-700 text-base font-medium leading-relaxed max-w-2xl">
                Colour Name: Pink Department: Women Material Composition:
                Polyester Blend.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4 bg-gray-50 p-2.5 rounded-lg ">
                  <h3 className="font-medium text-lg text-gray-800 flex items-center gap-2">
                    Product Information
                  </h3>
                  <div className="grid grid-cols-2 gap-y-2 text-base text-gray-500">
                    <span className="font-medium">Category</span>
                    <span className="text-right text-gray-900">
                      Women's Fashion
                    </span>
                    <span className="font-medium">Subcategory</span>
                    <span className="text-right  text-gray-900">
                      Women's Clothing
                    </span>
                    <span className="font-medium">Brand</span>
                    <span className="text-right  text-gray-900">DeFacto</span>
                    <span className="font-medium">Items Sold</span>
                    <span className="text-right  text-gray-900">309+ sold</span>
                  </div>
                </div>
                <div className="space-y-4 bg-gray-50 p-2.5 rounded-lg">
                  <h3 className="font-medium text-lg text-gray-800">
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-base font-medium text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />{" "}
                      Premium Quality Product
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" /> 100%
                      Authentic Guarantee
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" /> Fast
                      & Secure Packaging
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-green-500" />{" "}
                      Quality Tested
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-0">
            <div className="flex flex-col justify-center md:flex-row gap-8 items-center p-5">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-5xl font-bold text-gray-800">4.8</span>
                <div className="flex text-yellow-400 my-2">
                  <Star fill="currentColor" size={19} />
                  <Star fill="currentColor" size={19} />
                  <Star fill="currentColor" size={19} />
                  <Star fill="currentColor" size={19} />
                  <StarOff size={19} />
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Based on 5 reviews
                </span>
              </div>

              <div className="flex-1 space-y-1 w-full pe-8 ">
                {[
                  { star: 5, value: 60 },
                  { star: 4, value: 25 },
                  { star: 3, value: 5 },
                  { star: 2, value: 5 },
                  { star: 1, value: 5 },
                ].map((rating) => (
                  <div
                    key={rating.star}
                    className="flex items-center gap-3 text-xs"
                  >
                    <span className="w-6 text-sm text-gray-600">
                      {rating.star} star
                    </span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400"
                        style={{ width: `${rating.value}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-sm text-gray-600">
                      {rating.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500 py-10 border-t border-gray-100">
              <Star
                size={44}
                fill="currentColor"
                className="text-gray-300  mx-auto mb-4"
              />
              <span className="text-base font-medium">
                {" "}
                Customer reviews will be displayed here.
              </span>
              <br />
              <div className="mt-4">
                <a href="#" className="text-green-600 font-medium ">
                  Write a Review
                </a>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-0 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="bg-[#E4FCEC] p-6 rounded-2xl border border-green-100 space-y-4">
                <div className="flex items-center gap-3">
                  <Truck
                    className="text-white bg-main-color p-2.5 rounded-full"
                    size={48}
                  />
                  <h3 className="font-semibold text-lg">
                    Shipping Information
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 list-inside list-check-green">
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    Free shipping on orders over $50
                  </li>
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    Standard delivery: 3-5 business days
                  </li>
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    Express delivery available (1-2 business days)
                  </li>
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    Track your order in real-time
                  </li>
                </ul>
              </div>

              <div className="bg-[#E4FCEC] p-6 rounded-2xl border border-green-100 space-y-4">
                <div className="flex items-center gap-3">
                  <RotateCcw
                    className="text-white bg-main-color p-2.5 rounded-full"
                    size={48}
                  />
                  <h3 className="font-semibold text-lg">Returns & Refunds</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 list-inside list-check-green">
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    30-day hassle-free returns
                  </li>
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    Full refund or exchange available
                  </li>
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    Free return shipping on defective items
                  </li>
                  <li>
                    <CheckCircle2
                      size={16}
                      className="text-green-500 inline mr-2"
                    />{" "}
                    Easy online return process
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10  flex items-center gap-4 bg-gray-50 p-5 rounded-xl border border-gray-100 text-sm">
              <ShieldBan
                size={52}
                className="text-gray-600 bg-gray-200 p-2.5 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-base text-gray-800 mb-1">
                  Buyer Protection Guarantee
                </h4>
                <p className="text-gray-600">
                  Get a full refund if your order doesn't arrive or isn't as
                  described. We ensure your shopping experience is safe and
                  secure.
                </p>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
