"use client";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { handleProductDelete } from "./AddToCard.Action";
import { toast } from "sonner";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext/CartContext";

export default function HandelProductDelete({
  productId,
}: {
  productId: string;
}) {
  const { setCartCount } = useContext(CartContext);
  function handelRemovedProduct() {
    // handleProductDelete(productId);

    toast.promise(handleProductDelete(productId), {
      loading: "Loading....",
      position: "top-center",
      success: ({ products }) => {
        setCartCount(products.length);
        return "Product deleted successfully ";
      },
    });
  }
  return (
    <Button
      onClick={handelRemovedProduct}
      variant="ghost"
      size="icon"
      className="text-red-500 hover:bg-red-50 hover:text-red-600 border"
    >
      <Trash2 size={18} />
    </Button>
  );
}
