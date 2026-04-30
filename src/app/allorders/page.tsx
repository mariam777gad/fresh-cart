import { Button } from "@/components/ui/button";
import { getAllOrders, getUserOrders } from "./allorders.action";
import { Handbag, Heart, Package, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { AllOrders } from "./allorders.interface";
import OrderCard from "./OrderCard";

export default async function page() {
  const myOrders = await getUserOrders();
  // const allOrders=await getAllOrders()
  // console.log(allOrders);

  if (!myOrders || myOrders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] py-20 px-4 mt-20 text-center">
        <div className="bg-gray-100 p-6 rounded-2xl mb-6">
          <Package size={48} className="text-gray-400 stroke-[1.5]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h3>
        <p className="text-gray-500 text-sm max-w-[280px] mb-8 leading-relaxed">
          When you place orders, they'll appear here so you can track them.
        </p>
        <Link href="/">
          <Button className="bg-[#16A34A] hover:bg-[#15803D] text-white text-base font-bold px-8 py-6 rounded-xl flex items-center gap-2 transition-all shadow-sm">
            <ShoppingBag size={20} />
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50/50 min-h-screen mt-30">
      <nav className="flex items-center text-[13px] text-gray-500 mb-6">
        <Link href="/">
          <span className="hover:text-green-600 cursor-pointer">Home</span>
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-800 font-medium">My Orders</span>
      </nav>

      <div className="flex items-center gap-3 mb-10">
        <div className="flex items-center justify-center bg-[#1BB253] p-2">
          <Handbag className="w-6 h-6 text-white fill-none stroke-[1.5] rounded-2xl" />
        </div>
        <div>
          <h1 className="text-[22px] font-bold text-[#212529]">My Orders</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {myOrders.length} item saved
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-8"></div>

      <div className="space-y-4">
        {myOrders.map((order: AllOrders) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
