"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { countContext } from "./ProductDetailsWrapper";

export default function ProductQuantity() {
  const {count, setCount} = useContext(countContext);
  function handelProductCount(newCount: number) {
   if(newCount>=1){
     setCount(newCount);
   } 
  }

  return (
    <div className="flex items-center justify-center  py-1 w-35  bg-gray-50 border rounded-lg overflow-hidden ">
      <Button
        onClick={function () {
          handelProductCount(count - 1);
        }}
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-sm bg-white shadow-2xl shadow-white text-gray-600 hover:bg-gray-100 hover:text-gray-800"
      >
        <Minus size={25} />
      </Button>
      <span className="px-4 font-bold text-md">{count}</span>
      <Button
        onClick={function () {
          handelProductCount(count + 1);
        }}
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-sm bg-green-600 text-white hover:bg-green-700 hover:text-white"
      >
        <Plus size={50} />
      </Button>
    </div>
  );
}
