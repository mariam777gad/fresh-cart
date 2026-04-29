"use server";
import { cookies } from "next/headers";
import { UserDataType } from "./register.interface";

export async function sendUserData(data:UserDataType) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );
  const responseData = await response.json();
  // console.log(responseData);
  const x = await cookies();
  x.set("userName", "Ahmed Sayed", {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 2,
  });
  return responseData.message;
}
