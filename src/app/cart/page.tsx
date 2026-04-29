
import {
  ShoppingCart,
  ChevronLeft,
  Truck,
  Tag,
  LockKeyholeIcon,
  BriefcaseBusiness,
  ShieldHalf,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getUserCart } from "@/components/AddProductToCart/AddToCard.Action";
import HandelProductQuantity from "@/components/AddProductToCart/HandelProductQuantity";
import HandelProductDelete from "@/components/AddProductToCart/HandelProductDelete";
import HandelCartDeleteAllProduct from "@/components/AddProductToCart/HandelCartDelete";
import { ProductCart } from "@/components/AddProductToCart/AddToCard.interface";
import Link from "next/link";
import CartInfoButtons from "./CartInfoButtons";

export default async function CartPage() {

  const { numOfCartItems, cartId, products, totalCartPrice } =
    await getUserCart();
  //console.log(products[0]);

  return (
    <>
      {products.length > 0 ? (
        <div className="min-h-screen bg-gray-50/50 pb-20">
          <main className="max-w-7xl mx-auto px-4 mt-35">
            <div className="mb-6 space-y-3">
              <p className="text-sm text-gray-600 mb-2">
                <Link
                  className="text-gray-500 hover:text-main-color font-medium"
                  href={"/"}
                >
                  Home
                </Link>{" "}
               <span className='font-medium text-gray-900'> / Shopping Cart</span>
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-green-600 p-2 rounded-lg text-white">
                  <ShoppingCart size={30} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Shopping Cart
                </h2>
              </div>
              <p className="text-md text-gray-500 font-medium mt-1">
                You have{" "}
                <span className=" text-green-600 font-semibold">{numOfCartItems} items</span>{" "}
                in your cart
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-4">
                {products.map((e: ProductCart) => (
                  <Card
                    key={e._id}
                    className="overflow-hidden border-none shadow-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <Link
                          href={`productdetails/${e.product._id}`}
                          className="flex flex-col"
                        >
                          <div className="w-32 h-32 bg-gray-100 overflow-hidden rounded-xl flex items-center justify-center border">
                            <img
                              src={e.product.imageCover}
                              alt="Shawl"
                              className="rounded-lg mix-blend-multiply"
                            />
                          </div>
                          <div className="pt-2 flex justify-end ">
                            <Badge className="bg-green-600 hover:bg-green-600  text-[10px] h-5">
                              ✓ In Stock
                            </Badge>
                          </div>
                        </Link>

                        <div className="flex-1 space-y-3">
                          <Link href={`productdetails/${e.product._id}`}>
                            <h3 className="text-lg mb-3 font-semibold hover:text-main-color text-gray-800">
                              {e.product.title}
                            </h3>
                          </Link>
                          <div className="flex gap-2 items-center">
                            <Badge
                              variant="secondary"
                              className="bg-green-50 text-green-700 hover:bg-green-50 border-none font-normal"
                            >
                              {e.product.category.name}
                            </Badge>
                            <span className="text-xs text-gray-400">
                              • SKU: 5CA0B3
                            </span>
                          </div>
                          <p className="text-lg font-bold text-green-600 pt-2">
                            {e.price} EGP{" "}
                            <span className="text-xs text-gray-400 font-normal">
                              per unit
                            </span>
                          </p>
                          <HandelProductQuantity
                            count={e.count}
                            productId={e.product._id}
                          />
                        </div>

                        <div className="flex flex-col items-end gap-6">
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                                Total
                              </p>
                              <p className="text-xl font-bold text-gray-800">
                                {e.price * e.count}{" "}
                                <span className="text-xs font-normal">EGP</span>
                              </p>
                            </div>

                            <HandelProductDelete productId={e.product._id} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="flex justify-between items-center text-sm pt-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 underline-none no-underline"
                  >
                    <Button
                      variant="link"
                      className="text-gray-500 gap-2 p-0 h-auto "
                    >
                      <ChevronLeft size={16} /> Continue Shopping
                    </Button>
                  </Link>
                  <HandelCartDeleteAllProduct />
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="border-none shadow-md">
                  <div className="bg-green-700 text-white p-4 rounded-t-xl">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <BriefcaseBusiness size={18} /> Order Summary
                    </h3>
                    <p className="text-sm text-white  mt-1">
                      1 item in your cart
                    </p>
                  </div>
                  <CardContent className="p-6 space-y-6">
                    <div className="bg-green-50 p-4 rounded-lg  ">
                      <div className="flex items-center gap-4 text-xs font-medium text-orange-700 mb-2">
                        <div>
                          <Truck size={22} className="text-main-color" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-green-700">
                            Free Shipping!
                          </h3>
                          <p className="text-md text-green-600">
                            You qualify for free delivery
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium text-lg">
                          Subtotal
                        </span>
                        <span className="font-medium text-md">
                          {totalCartPrice} EGP
                        </span>
                      </div>
                      <div className="flex gap-2.5 justify-between text-sm">
                        <span className="text-gray-500 font-medium text-lg">
                          Shipping
                        </span>
                        <span className="font-medium text-lg text-main-color">
                          FREE
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>
                          <span className="text-2xl">{totalCartPrice}</span>{" "}
                          <span className="text-sm font-medium text-gray-400">
                            EGP
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full rounded-lg hover:bg-green-50 hover:text-green-600 justify-center py-5 gap-2 text-gray-600 border-gray-200 border-dashed border-2 hover:border-green-200"
                      >
                        <Tag size={16} /> Apply Promo Code
                      </Button>
                      <Link href={"/checkout"}>
                        <Button className="w-full rounded-lg bg-green-700 hover:bg-green-800 h-12 text-md font-semibold gap-2">
                          <LockKeyholeIcon size={18} /> Secure Checkout
                        </Button>
                      </Link>
                    </div>

                    <div className="flex justify-center gap-6 pt-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <ShieldHalf size={15} className="text-green-600" />{" "}
                        Secure Payment
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                        <Truck size={15} className="text-blue-500" /> Fast
                        Delivery
                      </div>
                    </div>

                    <div className="text-center pt-2">
                      <Link
                        href={"/"}
                        className="hover:underline-none hover:no-underline"
                      >
                        <Button
                          variant="link"
                          className="text-sm text-main-color no-underline hover:text-green-600   p-0 h-auto"
                        >
                          ← Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </div>
          </main>
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

          <CartInfoButtons />
        </div>
      )}
    </>
  );
}
