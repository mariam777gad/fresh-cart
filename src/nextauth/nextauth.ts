import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

type LoginResponseType = {
  satausMsg: "fail";
  message: "incorrect email or password" | "success";
  user: {
    name: string;
    email: string;
    role: string;
  };
  token: string;
};

type UserDataReturned = {
  name: string;
  email: string;
  tokencredentials: string;
  id: string;
};

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "User Login",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (values): Promise<UserDataReturned | null> => {
        const request = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(values),
          },
        );
        const response: LoginResponseType = await request.json();
        if (request.ok) {
          const { email, name } = response.user;
          const data: { id: string } = jwtDecode(response.token);
          return { email, name, id: data.id, tokencredentials: response.token };
        }
        // console.log(response);
        return null;
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID!,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
    }),
  ],
  callbacks: {
    jwt(params) {
      if (params.user) {
        params.token.mytkn = params.user.tokencredentials;
        params.token.id = params.user.id;
      }
      // console.log("jwt", params);
      return params.token;
    },
    session(param) {
      if (param.session.user) {
        param.session.user.id = param.token.id as string;
      }
      // console.log("session", param);
      return param.session;
    },
  },
  pages: { signIn: "/login" },
  jwt: { maxAge: 60 * 60 * 24 * 3 },
};
