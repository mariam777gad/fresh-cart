"use server";
import { getUserToken } from "@/app/utils";
import { LoggedUserData, NewDataResponse } from "./InformationForm.interface";

export async function UpdateLoggedUserData(data: LoggedUserData) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/updateMe/`,
    {
      method: "PUT",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const res:NewDataResponse = await response.json();
  //console.log(res);
  return res;
}
