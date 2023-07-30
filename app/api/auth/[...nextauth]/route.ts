import NextAuth from "next-auth/next";
import type { NextAuthOptions, DefaultSession, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import axios, { isAxiosError } from "axios";
import { type ResponseModel, rawApi, ZodError } from "@/services/api";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: Pick<Mahasiswa, "nim" | "name" | "token">;
    jwt: ApiJWT;
  }

  interface User {
    user: Pick<Mahasiswa, "nim" | "name" | "token">;
    jwt: ApiJWT;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: Pick<Mahasiswa, "nim" | "name" | "token">;
    jwt: ApiJWT;
  }
}

type Mahasiswa = {
  nim: number;
  name: string;
  email: string;
  whatsapp: string;
  angkatan: number;
  idLine: string;
  prodi: string;
  token: string;
};

type ApiJWT = {
  token: string;
  expiresIn: number;
};

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, token }) => {
      session.user = token.user;
      session.jwt = token.jwt;
      return session;
    },

    jwt: async ({ token, user }: { token: JWT; user: User }) => {
      if (user) {
        token.user = user.user;
        token.jwt = user.jwt;
      }

      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 day = 86400 (ikutin backend)
  },
  secret: process.env.NEXT_AUTH_SECRET ?? "MAXIMA23!@#",
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "NIM",
      credentials: {
        nim: { label: "NIM", type: "number" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) throw new Error("ERR_DETAILS_INVALID");

        try {
          const {
            data: { data: jwt },
          } = await axios.post<ResponseModel<ApiJWT>>(
            `${process.env.NEXT_PUBLIC_API_URL}/mahasiswa/login`,
            {
              nim: Number(credentials.nim),
              password: credentials.password,
            }
          );

          const {
            data: { data: user },
          } = await axios.get<ResponseModel<Mahasiswa>>(
            `${process.env.NEXT_PUBLIC_API_URL}/mahasiswa/profile`,
            {
              headers: {
                Authorization: `Bearer ${jwt?.token}`,
              },
            }
          );

          return {
            user: {
              nim: user?.nim,
              name: user?.name,
              token: user?.token,
            },
            jwt,
          } as any; // hack untuk bypass next-auth strict type
        } catch (err: any) {
          if (isAxiosError<ResponseModel<any>>(err)) {
            // zod validation error
            if (err.response?.data.error) {
              const errorString = (err.response?.data.error as ZodError).issues
                .map((issue) => {
                  const { message } = issue;
                  return message;
                })
                .join(", ");

              throw new Error(errorString);
            }

            // generic error
            if (err.response?.data.message) {
              throw new Error(err.response.data.message);
            }
          }
          throw new Error("ERR_REQUEST_ERROR");
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
