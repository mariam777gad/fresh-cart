"use server";
import { revalidatePath } from "next/cache";
import { getUserToken } from "../utils";
import {
  OnlinePaymentResponse,
  OrderResponse,
  ShippingAddressType,
} from "./cheeckout.interface";

export async function handelCashOrder(
  shippingAddress: ShippingAddressType,
  cartId: string,
) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shippingAddress),
    },
  );
  const data: OrderResponse = await response.json();
  revalidatePath("/cart");
}

export async function handelOnlineOrder(
  shippingAddress: ShippingAddressType,
  cartId: string,
) {
  const { token, userId } = await getUserToken();
  const domain = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const successPath = `${domain}`;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=${successPath}`,
    {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shippingAddress),
    },
  );
  const data: OnlinePaymentResponse = await response.json();
  //console.log(data);

  // return data.session.url;
  if (!data?.session?.url) {
    throw new Error("No payment session URL returned");
  }
  return data.session.url;
}
