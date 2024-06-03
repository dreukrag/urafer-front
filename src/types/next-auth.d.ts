// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    id:string,
    sessionToken: string,
    userId: string,
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      emailVerified?: boolean;
      sessionToken?: string;
    } & DefaultSession["user"];
  }
}