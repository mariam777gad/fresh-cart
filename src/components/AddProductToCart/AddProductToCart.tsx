"use client";
import { Plus } from "lucide-react";
import AppButton from "../shared/AppButton/AppButton";
import { handleAddProductToCart } from "./AddToCard.Action";
import { toast } from "sonner";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext/CartContext";

export default function AddProductToCart({ id }: { id: string }) {
  const { setCartCount } = useContext(CartContext);
  function addTocart() {
    toast.promise(handleAddProductToCart({ productId: id }), {
      loading: "Adding to cart...",
      success: function ({ message, numOfCartItems }) {
        setCartCount(numOfCartItems);
        return message;
      },
      error: "Failed to add product to cart.",
    });
  }
  return (
    <AppButton
      onClick={addTocart}
      className="bg-main-color cursor-pointer text-white rounded-full hover:bg-green-900 transition-colors"
    >
      <Plus size={20} />
    </AppButton>
  );
}
