"use server";

export default async function sendUserDataLogin(data) {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`,
    {
      method: "POST",
      headers: {
       "content-type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const response = await request.json();
  // console.log(response);
  return response.message;
}
