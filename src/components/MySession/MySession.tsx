"use client";
import CartContextProvider from "@/Context/CartContext/CartContext";
import WishlistContextProvider from "@/Context/WishlistContext/WishlistContext";
import { SessionProvider } from "next-auth/react";

export default function MySession({ children }: { children: React.ReactNode }) {
  return (
    <WishlistContextProvider>
      <CartContextProvider>
        <SessionProvider>{children}</SessionProvider>
      </CartContextProvider>
    </WishlistContextProvider>
  );
}
