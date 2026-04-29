import WishlistButtonsInfo from "./WishlistButtonsInfo";
import { Heart, ShoppingCart, Eye, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getUserWishlist } from "@/components/AddProductToWishlist/AddToWishlist.action";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import HandelProductDelete from "@/components/AddProductToWishlist/HandelProductDelete";
import Link from "next/link";
import WishlistAddToCart from "./WishlistAddToCart";

export default async function WishlistPage() {
  const data = await getUserWishlist();
  //console.log(data);
  return (
    <>
      {data.data.length > 0 ? (
        <div className="bg-[#FBFCFD] min-h-screen font-sans">
          <div className="bg-[#FFFFFF] w-full mt-30 py-2 mb-8 border-b border-gray-100">
            <div className="w-7xl mx-auto">
              {" "}
              <nav className="flex items-center text-[13px] text-gray-500 mb-4">
                <Link href="/">
                  {" "}
                  <span className="hover:text-green-600 text-sm font-medium cursor-pointer">
                    Home
                  </span>
                </Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-800 text-sm font-medium">
                  Wishlist
                </span>
              </nav>
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center justify-center bg-[#FEF2F2] p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-[#FB2C36] fill-[#FB2C36] stroke-[1.5]" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#212529]">
                    My Wishlist
                  </h1>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">{data.data.length} item saved</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto ">
            <div className="bg-white rounded-xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
              <Table>
                <TableHeader className="bg-[#F9FAFB] border-b border-gray-200">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="py-4 px-6 text-[#6A7282] font-medium text-[15px]">
                      Product
                    </TableHead>
                    <TableHead className="py-4 px-6 text-[#6A7282] font-medium text-[15px]">
                      Price
                    </TableHead>
                    <TableHead className="py-4 px-6 text-[#6A7282] font-medium text-[15px]">
                      Status
                    </TableHead>
                    <TableHead className="py-4 pe-25  text-[#6A7282] font-medium text-[15px] text-right ">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.data.map((e) => {
                    return (
                      <TableRow key={e.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <TableCell className="py-6 px-6">
                          <div className="flex items-center gap-5">
                            <Link href={`/productdetails/${e.id}`}>
                              <div className="w-20 h-20 bg-[#F9FAFB] rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden">
                                <Image
                                  src={e.imageCover}
                                  alt="wishlist product"
                                  width={50}
                                  height={60}
                                />
                              </div>
                            </Link>

                            <div>
                              <Link href={`/productdetails/${e.id}`}>
                                <h3 className="font-medium text-[#212529] text-[16px]">
                                  {e.title}
                                </h3>
                              </Link>
                              <p className="text-[13px] font-medium text-gray-500 mt-1">
                                {e.category.name}
                              </p>
                            </div>
                          </div>
                        </TableCell>

                        {e.priceAfterDiscount ? (
                          <TableCell className="pt-10 px-6 flex flex-col">
                            <span className="font-semibold text-[#212529] text-[15px]">
                              {e.price} EGP
                            </span>
                            <span className=" text-[#99A1AF] line-through font-medium text-[15px]">
                              {e.priceAfterDiscount} EGP
                            </span>
                          </TableCell>
                        ) : (
                          <TableCell className="py-6 px-6 ">
                            <span className="font-medium text-[#212529] text-[15px]">
                              {e.price} EGP
                            </span>
                          </TableCell>
                        )}

                 <WishlistAddToCart productId={e.id}/>


                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8">
              <Link href="/shop">
                <button className="flex items-center text-[#495057] hover:text-green-600 font-medium text-[14px] transition-colors">
                  <span className="mr-2">←</span>
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-screen flex-col items-center justify-center  px-4 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100">
            <Heart className="h-10 w-10 text-gray-400" />
          </div>

          <div className="w-100 ">
            <h1 className="text-xl font-bold mb-1.5 ">
              Your wishlist is empty
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Browse products and save your favorites here. Sign in to sync your
              wishlist across devices.
            </p>
          </div>

          <WishlistButtonsInfo />
        </div>
      )}
    </>
  );
}
