import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";


declare module "next-auth" {
  interface User {
    id: string;
    tokencredentials?: string;
    _id?: string;
  }

  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    mytkn?: string;
  }
}
