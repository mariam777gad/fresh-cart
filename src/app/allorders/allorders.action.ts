"use server";
import { getUserToken } from "../utils";
import { AllOrdersType, Orders } from "./allorders.interface";

export async function getUserOrders() {
  const { token, userId } = await getUserToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/user/${userId}`,
    {
      method: "GET",
      headers: {
        token: token as string,
      },
      cache: "no-store",
    },
  );

  const data: AllOrdersType = await res.json();
  //console.log('data',data);

  return data;
}

export async function getAllOrders() {
  const { token, userId } = await getUserToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/`,
    {
      method: "GET",
      headers: {
        token: token as string,
      },
    },
  );

  const { data } = await res.json();
  //console.log( data);

  return data;
}
