"use server";
import { getUserToken } from "@/app/utils";
import { AuthResponse, ChangePassword } from "./PasswordForm.interface";
import { cookies } from "next/headers";

export async function UpdateLoggedUserPassword(data: ChangePassword) {
  const { token, userId } = await getUserToken();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/changeMyPassword`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  const res: AuthResponse = await response.json();
  console.log(res);
  if (res.message === "success") {
    const cookieStore = await cookies();
    cookieStore.set("userToken", res.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res.message;
  }

  return res.message;

  // return res
}
