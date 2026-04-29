import {
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  Info,
  PackageCheck,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUserCart } from "@/components/AddProductToCart/AddToCard.Action";
import Link from "next/link";
import PaymentForm from "./PaymentForm";
import { CheckoutWrapper } from "./CheckOutWrapper";
import PaymentButtons from "./PaymentButtons";
import PaymentRadioButton from "./PaymentRadioButton";
import CartProducts from "./CartProducts";

export default async function CheckoutPage() {

  const { numOfCartItems, cartId, products, totalCartPrice } =
    await getUserCart();
  const shouldScroll = products.length > 3;
  return (
    <div className="max-w-7xl mx-auto mt-28 p-4 md:p-8 bg-gray-50/50 min-h-screen">
      <div className="flex flex-col gap-2 mb-8">
        <nav className="text-sm text-muted-foreground flex items-center gap-2">
          <Link href="/">
            <span className="p-1 rounded-xl hover:text-main-color hover:bg-gray-100 transition-colors">
              Home
            </span>
          </Link>{" "}
          /{" "}
          <Link href="/cart">
            <span className="p-1 rounded-xl hover:text-main-color hover:bg-gray-100 transition-colors">
              Cart
            </span>
          </Link>{" "}
          / <span className="text-foreground">Checkout</span>
        </nav>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-4 rounded-lg">
              <PackageCheck className="text-green-700 w-6 h-6" size={30} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              Complete Your Order
            </h1>
          </div>
          <Link href="/cart">
            {" "}
            <Button
              variant="ghost"
              size="sm"
              className="text-main-color p-5 text-md hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Carts
            </Button>
          </Link>
        </div>
        <p className="text-[#6A7282] font-medium ml-11">
          Review your items and complete your purchase
        </p>
      </div>

      <CheckoutWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          <div className="lg:col-span-2 space-y-6">
            <div className=" shadow-sm rounded-2xl">
              <CardHeader className="bg-green-700 text-white rounded-t-xl py-4">
                <CardTitle className="text-lg flex items-center gap-2 font-medium">
                  <MapPin className="w-5 h-5" /> Shipping Address
                </CardTitle>
                <p className="text-green-50 text-xs font-light">
                  Where should we deliver your order?
                </p>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex gap-3 items-start">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div className="text-sm text-blue-700">
                    <p className="font-medium">Delivery Information</p>
                    <p>
                      Please ensure your address is accurate for smooth delivery
                    </p>
                  </div>
                </div>

                <PaymentForm cartId={cartId} />
              </CardContent>
            </div>

            <div className=" shadow-sm rounded-2xl">
              <CardHeader className="bg-green-700 text-white rounded-t-xl py-4">
                <CardTitle className="text-lg flex items-center gap-2 font-medium">
                  <CreditCard className="w-5 h-5" /> Payment Method
                </CardTitle>
                <p className="text-green-50 text-xs font-light">
                  Choose how you'd like to pay
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <PaymentRadioButton />

                <div className="mt-6 flex items-center gap-3 p-4 border border-dashed rounded-xl bg-gray-50/50">
                  <ShieldCheck className="text-green-600 w-8 h-8" />
                  <div className="text-xs text-muted-foreground">
                    <p className="font-bold text-foreground">
                      Secure & Encrypted
                    </p>
                    <p>
                      Your payment info is protected with 256-bit SSL encryption
                    </p>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>

          <div className=" lg:sticky lg:top-8 w-full ml-auto ">
            <div className=" shadow-md rounded-2xl overflow-hidden bg-white">
              <CardHeader className="bg-[#438e3c] text-white p-5 space-y-1">
                <CardTitle className="text-xl flex items-center gap-2 font-semibold">
                  <PackageCheck className="w-6 h-6" />
                  Order Summary
                </CardTitle>
                <p className="text-green-50/90 text-sm font-normal">
                  {products.length} items
                </p>
              </CardHeader>

              <CardContent className="p-0">
                <div className="relative">
                  {/* {shouldScroll && (
                    <div className="absolute right-4 top-2 z-10 animate-bounce text-gray-300">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  )} */}

                  <div
                    className={`px-6 pt-6 space-y-5 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent ${
                      shouldScroll
                        ? "max-h-[340px] overflow-y-auto pb-4"
                        : "pb-6"
                    }`}
                  >
                    <CartProducts products={products} />
                  </div>
                </div>

                <div className="px-6 pb-6 space-y-4">
                  <Separator className="bg-gray-100" />

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[15px]">
                      <span className="text-gray-500 font-medium">
                        Subtotal
                      </span>
                      <span className="font-bold text-gray-800">
                        {totalCartPrice} EGP
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[15px]">
                      <span className="text-gray-500 font-medium flex items-center gap-2">
                        <Truck className="w-4 h-4" /> Shipping
                      </span>
                      <span className="text-[#438e3c] font-black text-sm tracking-tight">
                        FREE
                      </span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-lg font-extrabold text-gray-900">
                        Total
                      </span>
                      <div className="text-right flex items-baseline gap-1">
                        <span className="text-2xl font-black text-[#438e3c]">
                          {totalCartPrice}
                        </span>
                        <span className="text-[11px] font-bold text-[#438e3c]">
                          EGP
                        </span>
                      </div>
                    </div>
                  </div>

                  <PaymentButtons />

                  <div className="flex justify-between items-center px-2 pt-4">
                    <div className="flex flex-col items-center gap-1.5 group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Secure
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5 group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Truck className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Fast Delivery
                      </span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5 group cursor-default">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <PackageCheck className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Easy Returns
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </div>
      </CheckoutWrapper>
    </div>
  );
}
