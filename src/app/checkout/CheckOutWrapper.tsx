"use client";

import { createContext, useContext, useState } from "react";

type CheckoutContextType = {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;

};

const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutWrapper({ children }: { children: React.ReactNode }) {
  const [paymentMethod, setPaymentMethod] = useState("online");
  return (
    <CheckoutContext.Provider
      value={{
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return useContext(CheckoutContext)!;
}
