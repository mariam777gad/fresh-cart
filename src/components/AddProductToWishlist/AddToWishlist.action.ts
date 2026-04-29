"use server";
import { getUserToken } from "@/app/utils";
import {
  GetWishlistResponse,
  productWishlistId,
  WishlistDeletedProduct,
} from "./AddToWishlist.interface";
import { revalidatePath } from "next/cache";

export async function handleAddProductToWishlist(productId: productWishlistId) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist`,
    {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productId),
    },
  );
  const resdata = await response.json();
  // console.log(resdata);
  const { status, message, data } = resdata;
  revalidatePath("/wishlist");
  return { status, message, data };
}

export async function getUserWishlist() {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist`,
    {
      method: "GET",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    },
  );
  const data: GetWishlistResponse = await response.json();
  // console.log(data);

  return data;
}

export async function removeProductFromWishlist(productId: string) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/wishlist/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data: WishlistDeletedProduct = await response.json();
  console.log(data);

  revalidatePath("/wishlist");

  return data;
}
