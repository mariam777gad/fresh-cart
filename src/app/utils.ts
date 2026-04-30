
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

// export async function getUserToken() {
//   const cookie = await cookies();
//   const sesstionToken = cookie.get("next-auth.session-token")?.value;

//   const jwt = await decode({
//     token: sesstionToken,
//     secret: process.env.NEXTAUTH_SECRET!,
//   });
//     return {
//     token: jwt?.mytkn,
//     userId: jwt?.id,
//   };
// }
export async function getUserToken() {
  const cookie = await cookies();

  const sessionToken = 
    cookie.get("next-auth.session-token")?.value || 
    cookie.get("__Secure-next-auth.session-token")?.value;

  if (!sessionToken) {
    return { token: null, userId: null };
  }

  const jwt = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  return {
    token: jwt?.mytkn as string,
    userId: jwt?.id as string,
  };
}