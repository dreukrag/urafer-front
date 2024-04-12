import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const config = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: "",
    }),
    // ...add more providers here
  ],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
