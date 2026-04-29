"use client";
import { createContext, useState } from "react";

export const WishlistContext = createContext({
  wishlistCount: 0,
  setWishlistCount: (count: number) => {},
});
export default function WishlistContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  return (
    <WishlistContext.Provider value={{ wishlistCount, setWishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
}
