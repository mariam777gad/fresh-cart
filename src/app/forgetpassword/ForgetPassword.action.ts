"use server";
import {
  ForgetPasswordData,
  ResetPasswordData,
  VerifyResetCodeData,
} from "./ForgetPassword.interface";

export async function handelForgetPasswordEmail(data: ForgetPasswordData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/forgotPasswords`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const resdata = await response.json();

  //console.log(resdata);
  return resdata;
}

export async function handelVerifyResetCode(data: VerifyResetCodeData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/verifyResetCode`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const resdata = await response.json();

  //console.log(resdata);
  return resdata;
}

export async function handelResetPassword(data: ResetPasswordData) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/resetPassword`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const resdata = await response.json();

 // console.log(resdata);
  return resdata
}
