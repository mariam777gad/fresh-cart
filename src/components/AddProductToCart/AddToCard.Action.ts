"use server";

import { getUserToken } from "@/app/utils";
import { CartResponse, productCartId, productQuantity } from "./AddToCard.interface";
import { revalidatePath } from "next/cache";

export async function handleAddProductToCart(data: productCartId) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart`,
    {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const {
    status,
    message,
    numOfCartItems,
    cartId,
    data: { products, totalCartPrice },
  } = await response.json();
  revalidatePath("/cart");
  return {
    status,
    message,
    numOfCartItems,
    cartId,
    products,
    totalCartPrice,
  };
}

export async function getUserCart() {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart`,
    {
      method: "GET",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    },
  );
  const data = await response.json();

  /* in log out case */
  if (!data || !data.data) {
    return {
      numOfCartItems: 0,
      cartId: null,
      products: [],
      totalCartPrice: 0,
    };
  }

  const {
    numOfCartItems,
    cartId,
    data: { products, totalCartPrice },
  } = data;

  return { numOfCartItems, cartId, products, totalCartPrice };
}

export async function handleProductQuantity(
  data: productQuantity,
  productId: string,
) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/${productId}`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const responseDAta = await response.json();
  console.log(responseDAta);

  revalidatePath("/cart");
  return responseDAta;
}

export async function handleProductDelete(productId: string) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
      },
    },
  );
  const responseDAta :CartResponse = await response.json();

  //console.log(responseDAta);
  
  revalidatePath("/cart");
  return responseDAta.data
}

export async function handleCartDelete() {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
      },
    },
  );
  const responseDAta = await response.json();

  revalidatePath("/cart");
}
