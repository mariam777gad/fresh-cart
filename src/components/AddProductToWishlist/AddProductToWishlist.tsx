"use client";
import { Heart } from "lucide-react";
import { handleAddProductToWishlist } from "./AddToWishlist.action";
import { toast } from "sonner";
import { useContext } from "react";
import { WishlistContext } from "@/Context/WishlistContext/WishlistContext";

export default function AddProductToWishlist({ id }: { id: string }) {
  const { wishlistCount, setWishlistCount } = useContext(WishlistContext);

  function addToWishlist() {
    toast.promise(handleAddProductToWishlist({ productId: id }), {
      loading: "Adding to wishlist...",
      success: function ({ message, data }) {
        setWishlistCount(data.length);
        return message;
      },
      error: "Failed to add product to wishlist.",
    });
  }
  return (
    <button
      onClick={addToWishlist}
      className="p-2 bg-white rounded-full shadow-md hover:text-red-500 transition-colors border border-gray-100"
    >
      <Heart size={18} />
    </button>
  );
}
