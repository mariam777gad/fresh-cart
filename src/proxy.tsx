import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function proxy(req: NextRequest) {
  const token = await getToken({ req });
  //   console.log(token);
  //   console.log(req);
  //   console.log(req.nextUrl.pathname);

  const pathname = req.nextUrl.pathname;
  //   console.log(pathname);
  const isAuth: boolean = pathname === "/login" || pathname === "register";

  if (isAuth) {
    if (token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.url));
}
export const config = {
  matcher: [
    "/brands",
    "/cart",
    "/category",
    "/allorders",
    "/shop",
    "/contactus",
    "/wishlist",
    "/",
  ],
};
