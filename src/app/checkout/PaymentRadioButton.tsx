"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCheckout } from "./CheckOutWrapper";
import { Label } from "@/components/ui/label";
import { CreditCard, Truck } from "lucide-react";

export default function PaymentRadioButton() {
  const { paymentMethod, setPaymentMethod } = useCheckout();

  return (
    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
      <Label
        htmlFor="cod"
        className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <RadioGroupItem value="cash" id="cod" />
          <div>
            <p className="font-semibold">Cash on Delivery</p>
            <p className="text-sm text-muted-foreground">
              Pay when your order arrives at your doorstep
            </p>
          </div>
        </div>
        <Truck className="text-muted-foreground w-6 h-6" />
      </Label>


      <Label
        htmlFor="online"
        className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors border-green-200 bg-green-50/30"
      >
        <div className="flex items-center gap-4">
          <RadioGroupItem value="online" id="online" />
          <div>
            <p className="font-semibold">Pay Online</p>
            <p className="text-sm text-muted-foreground">
              Secure payment with Credit/Debit Card via Stripe
            </p>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-5 bg-blue-800 rounded sm" />{" "}
              <div className="w-8 h-5 bg-orange-500 rounded sm" />{" "}
            </div>
          </div>
        </div>
        <div className="bg-green-500 rounded-full p-1">
          <CreditCard className="text-white w-4 h-4" />
        </div>
      </Label>
    </RadioGroup>
  );
}
