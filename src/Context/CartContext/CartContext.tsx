"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({ cartCount: 0, setCartCount: (count: number) => {} });
export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = useState<number>(0);
  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
}
