'use client';
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {  handleProductQuantity } from "./AddToCard.Action";
import { toast } from "sonner";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext/CartContext";

export default function HandelProductQuantity({count ,productId}: {count: number ,productId:string}) {
  const { setCartCount } = useContext(CartContext);
  function handelProductCount(count:number){
    // console.log('new',count);
    const data={count}


   // handleProductQuantity(data ,productId)

    toast.promise(handleProductQuantity(data ,productId), {
  
      success: function ({numOfCartItems }) {
        setCartCount(numOfCartItems);
      },
      error: "Failed to remove product to cart.",
    });

  }

  return (
    <div className="flex items-center justify-center py-1 w-28  bg-gray-50 border rounded-lg overflow-hidden ">
      <Button
      onClick={function(){
        handelProductCount(count-1)
      }}
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-sm bg-white shadow-2xl shadow-white text-gray-600 hover:bg-gray-100 hover:text-gray-800"
      >
        <Minus size={14} />
      </Button>
      <span className="px-4 font-bold text-md">{count}</span>
      <Button
      onClick={function(){
        handelProductCount(count+1)
      }}
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-sm bg-green-600 text-white hover:bg-green-700 hover:text-white"
      >
        <Plus size={14} />
      </Button>
    </div>
  );
}
