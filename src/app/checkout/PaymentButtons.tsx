"use client";

import { Button } from "@/components/ui/button";
import { useCheckout } from "./CheckOutWrapper";
import { ShieldCheck } from "lucide-react";

export default function PaymentButtons() {
  const { paymentMethod } = useCheckout();

  // const handleOnlinePayment = (x:CheckoutFormData) => {
  //   console.log("online payment data:",x);
  // };

  // const handleCashOrder = (y:CheckoutFormData) => {
  //   console.log("Cash payment data:",y);
  // };

  return (
    <div className="sticky top-8">
      {paymentMethod === "online" ? (
        <Button
          form="checkout-form"
          type="submit"
          className="w-full bg-[#438e3c] hover:bg-[#367531] text-white h-14 rounded-2xl text-lg font-bold transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-3 mt-4"
        >
          <ShieldCheck className="w-6 h-6" />
          Proceed to Payment
        </Button>
      ) : (
        <Button
          form="checkout-form"
          type="submit"
          className="w-full bg-[#438e3c] hover:bg-[#367531] text-white h-14 rounded-2xl text-lg font-bold transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-3 mt-4"
        >
          <ShieldCheck className="w-6 h-6" />
          Place Order
        </Button>
      )}
    </div>
  );
}
