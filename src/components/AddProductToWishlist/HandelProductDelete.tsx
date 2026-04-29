"use client";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { removeProductFromWishlist } from "./AddToWishlist.action";
import { toast } from "sonner";
import { useContext } from "react";
import { WishlistContext } from "@/Context/WishlistContext/WishlistContext";

export default function HandelProductDelete({
  productId,
}: {
  productId: string;
}) {
  const { wishlistCount, setWishlistCount } = useContext(WishlistContext);
    
  function handelRemovedProduct() {
    toast.promise(removeProductFromWishlist(productId), {
      loading: "Adding to cart...",
      success: function ({message, data}) {
        setWishlistCount(data.length)
        return message;
      },
      error: "Failed to add product to cart.",
    });
  }
  return (
    <Button
      onClick={handelRemovedProduct}
      variant="ghost"
      size="icon"
      className="w-10 h-10 text-gray-300 hover:text-red-500 hover:bg-red-50 border border-gray-100 rounded-lg transition-colors"
    >
      <Trash2 className="w-4.5 h-4.5" />
    </Button>
  );
}
