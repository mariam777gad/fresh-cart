import { nextAuthConfig } from "@/nextauth/nextauth";
import NextAuth from "next-auth";

const routerHandler = NextAuth(nextAuthConfig);

export { routerHandler as GET, routerHandler as POST };
