"use client";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ShoppingCart, Zap } from "lucide-react";
import { useContext, useState } from "react";
import { countContext } from "./ProductDetailsWrapper";
import { handleAddProductToCart } from "@/components/AddProductToCart/AddToCard.Action";
import { toast } from "sonner";
import { CartContext } from "@/Context/CartContext/CartContext";
import Link from "next/link";
import { WishlistContext } from "@/Context/WishlistContext/WishlistContext";
import { handleAddProductToWishlist, removeProductFromWishlist } from "@/components/AddProductToWishlist/AddToWishlist.action";

export default function ProductDetailsButtons({
  price,
  priceAfterDiscount,
  id,
}: {
  price: number;
  priceAfterDiscount?: number;
  id: string;
}) {
  const { count, setCount } = useContext(countContext);
  const { setCartCount } = useContext(CartContext);
  const { setWishlistCount } = useContext(WishlistContext);
  const [isInWishlist, setIsInWishlist] = useState(false);

  function detailsAddToCart() {
    toast.promise(handleAddProductToCart({ productId: id }), {
      loading: "Adding to cart...",
      success: ({ numOfCartItems, message }) => {
        setCartCount(numOfCartItems);
        return message;
      },
      error: "Failed to add product to cart.",
    });
  }

  function detailsAddToWishlist() {
    toast.promise(handleAddProductToWishlist({ productId: id }), {
      loading: "Adding to wishlist...",
      success: ({ data, message }) => {
        setIsInWishlist(true);
        setWishlistCount(data.length)
        return message;
      },
      error: "Failed to add product to wishlist.",
    });
  }

  function detailsRemoveFromWishlist(){
        toast.promise(removeProductFromWishlist( id ), {
      loading: "Adding to wishlist...",
      success: ({ data, message }) => {
        setIsInWishlist(false);
        setWishlistCount(data.length)
        return message;
      },
      error: "Failed to remove product to wishlist.",
    });
  }


  return (
    <>
      <div className="flex items-center justify-between my-8">
        <div className="text-gray-600 font-medium">Total Price:</div>
        <div className="text-2xl font-bold text-main-color">
          {" "}
          {priceAfterDiscount ? priceAfterDiscount * count : price * count}.00
          EGP
        </div>
      </div>

      <div className=" flex gap-3 text-white w-full">
        <Button
          onClick={detailsAddToCart}
          className="grow bg-[#16A34A] hover:bg-[#15803D] py-6 text-base font-medium  rounded-lg  flex justify-center items-center"
        >
          <span className="me-3">
            <ShoppingCart />
          </span>
          <span>Add to Cart</span>
        </Button>
        <Link href="/cart" className="grow">
          {" "}
          <Button className="w-full bg-[#101828] hover:bg-[#1E2939] py-6 text-base font-medium rounded-lg   flex justify-center items-center">
            <span className="me-3">
              <Zap />
            </span>
            Buy Now
          </Button>
        </Link>
      </div>
      <div className=" flex gap-3 text-white mt-3 w-full">
        {isInWishlist ? (
          <Button
              onClick={detailsRemoveFromWishlist}
            className="grow bg-[#FEF2F2] hover:bg-[#FEF2F2] mt-3 py-6 text-base font-medium text-[#E7000B] border-2 border-[#FFC9C9] hover:border-[#FFC9C9] rounded-lg  flex justify-center items-center"
          >
            <span className="me-3">
              <Heart className="text-[#E7000B] fill-[#E7000B]" />
            </span>
            <span>In Wishlist</span>
          </Button>
        ) : (
          <Button
            onClick={detailsAddToWishlist}
            className="grow bg-white hover:bg-white mt-3 py-6 text-base font-medium text-black border-2 border-gray-200 hover:border-[#86EFAC] rounded-lg  flex justify-center items-center"
          >
            <span className="me-3">
              <Heart />
            </span>
            <span>Add to Wishlist</span>
          </Button>
        )}

        <Button className="bg-white w-15 hover:bg-white text-black py-6 text-base font-medium rounded-lg  border-2 border-gray-200 hover:border-[#86EFAC]   flex justify-center items-center">
          <Share2 />
        </Button>
      </div>
    </>
  );
}
