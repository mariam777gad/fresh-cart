
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken() {
  const cookie = await cookies();
  const sesstionToken = cookie.get("next-auth.session-token")?.value;

  const jwt = await decode({
    token: sesstionToken,
    secret: process.env.NEXTAUTH_SECRET!,
  });
    return {
    token: jwt?.mytkn,
    userId: jwt?.id,
  };
}
