"use client";

import { handleAddProductToCart } from "@/components/AddProductToCart/AddToCard.Action";
import HandelProductDelete from "@/components/AddProductToWishlist/HandelProductDelete";
import { Button } from "@/components/ui/button";
import { TableCell } from "@/components/ui/table";
import { CartContext } from "@/Context/CartContext/CartContext";
import { Eye, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "sonner";

export default function WishlistAddToCart({
  productId,
}: {
  productId: string;
}) {
  const [inCart, setInCart] = useState(false);
  const { setCartCount } = useContext(CartContext);

  function handelAddProductWishlistTocart() {
    toast.promise(handleAddProductToCart({ productId }), {
      loading: "Adding to cart...",
      success: function ({ message, numOfCartItems }) {
        setCartCount(numOfCartItems);
        setInCart(true);
        return message;
      },
      error: "Failed to add product to cart.",
    });
  }

  return (
    <>
      <TableCell className="py-6 px-6">
        {inCart ? (
          <div className="text-sm py-1 px-3 rounded-full flex items-center w-fit bg-[#F0FDF4] text-green-700">
            <ShoppingCart className="w-3.5 h-3.5 me-2" />
            <span>In Cart</span>
          </div>
        ) : (
          <p>
            <span className="text-sm py-1 px-3 rounded-full flex items-center justify-center w-fit bg-[#F0FDF4] text-green-700">
              <span className="w-2 h-2 bg-green-500 rounded-full me-2  "></span>
              <span>in stock</span>
            </span>
          </p>
        )}
      </TableCell>

      <TableCell className="py-6 px-6 text-right">
        <div className="flex items-center justify-end gap-3 pr-4">
          {inCart ? (
            <Link href="/cart">
              {" "}
              <Button
                variant="outline"
                className="bg-white text-gray-700 border border-gray-300 hover:bg-[#E5E7EB] text-[13px] px-4 h-10 rounded-lg flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-gray-400" />
                View Cart
              </Button>
            </Link>
          ) : (
            <Button
              onClick={handelAddProductWishlistTocart}
              variant="outline"
              className="bg-[#16A34A] text-white border border-gray-300 hover:bg-[#15803D] hover:text-white text-sm px-4 h-10 rounded-lg flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4 text-white" />
              Add to Cart
            </Button>
          )}

          <HandelProductDelete productId={productId} />
        </div>
      </TableCell>
    </>
  );
}
