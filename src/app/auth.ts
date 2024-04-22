import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const config = {
  providers: [Google],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
