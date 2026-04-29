"use client";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { useCheckout } from "./CheckOutWrapper";
import {
  ShippingAddressType,
  UserShippingAddress,
} from "./cheeckout.interface";
import { handelCashOrder, handelOnlineOrder } from "./chickout.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext/CartContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "./PaymentSchema";

export default function PaymentForm({ cartId }: { cartId: string }) {
  const { cartCount, setCartCount } = useContext(CartContext);
  const router = useRouter();
  const { paymentMethod } = useCheckout();

  const { control, handleSubmit } = useForm<UserShippingAddress>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(paymentSchema),
  });

  async function onSubmit(data: UserShippingAddress) {
    const shippingAddress: ShippingAddressType = { ShippingAddress: data };
    paymentMethod === "online"
      ? toast.promise(handelOnlineOrder(shippingAddress, cartId), {
          loading: "Redirecting to payment gateway...",
          success: (data) => {
            window.open(data, "_self");
            return "You will be redirected to the payment gateway.";
          },
          error:
            "There was an error processing your payment. Please try again.",
        })
      : toast.promise(handelCashOrder(shippingAddress, cartId), {
          loading: "Processing your order...",
          success: () => {
            router.push("/allorders");
            setCartCount(0);
            return "Your order has been placed successfully!";
          },
          error: "There was an error processing your order. Please try again.",
        });
  }

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-4"
    >
      <Controller
        name="city"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>City *</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="e.g. Cairo, Alexandria, Giza"
              autoComplete="off"
              type="text"
              className="mb-1.5 rounded-md focus-visible:ring-main-color"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />
      <Controller
        name="details"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Street Address *</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Street name, building number, floor, apartment..."
              autoComplete="off"
              type="text"
              className="mb-1.5 rounded-md focus-visible:ring-main-color"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Phone Number *</FieldLabel>
            <div className="relative">
              {" "}
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="01xxxxxxxxx"
                autoComplete="off"
                type="tel"
                className="mb-1.5 rounded-md focus-visible:ring-main-color"
              />
              <span className="absolute right-3 top-2.5 text-xs text-gray-500">
                Egyptian numbers only
              </span>
            </div>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />
    </form>
  );
}
