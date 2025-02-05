import NextAuth, { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./db";

const config = {
  providers: [
    // Google({
    //   account(account) {
    //     // https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens#refreshing-a-user-access-token-with-a-refresh-token
    //     const refresh_token_expires_at =
    //       Math.floor(Date.now() / 1000) +
    //       Number(account.refresh_token_expires_in);
    //     return {
    //       access_token: account.access_token,
    //       expires_at: account.expires_at,
    //       refresh_token: account.refresh_token,
    //       refresh_token_expires_at,
    //     };
    //   },
    // }),

    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "database" as const,
  },
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      // const sessionObject = {
      //   session.
      // }
      // session.user = user;
      // session.userId = session.userId;
      // session.sessionToken = session.sessionToken;
      // return session;

      return { ...session, user: { ...user } };
    },
  },
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "uranium_fever_db",
    collections: {
      Accounts: "uf_auth_accounts",
      Sessions: "uf_auth_sessions",
      Users: "uf_auth_users",
      VerificationTokens: "uf_auth_verification_tokens",
    },
  }),
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
