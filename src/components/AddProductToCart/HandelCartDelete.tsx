"use client";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { handleCartDelete } from "./AddToCard.Action";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext/CartContext";

export default function HandelCartDeleteAllProduct() {
  const { setCartCount } = useContext(CartContext);
  function handelClearCart() {
    handleCartDelete();
    setCartCount(0)
  }
  return (
    <Button
      onClick={handelClearCart}
      variant="ghost"
      size="sm"
      className="text-gray-500 gap-2"
    >
      <Trash2 size={16} /> Clear all items
    </Button>
  );
}
