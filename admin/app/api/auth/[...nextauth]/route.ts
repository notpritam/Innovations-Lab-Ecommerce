import { checkUser, connect } from "@/lib/db/mongodb";
import { NextAuthOptions } from "next-auth";

import NextAuth from "next-auth/next";

import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async signIn({ account, profile }) {
      console.log("signIn", account, profile);
      const email = profile?.email || "";
      await connect();
      const status = await checkUser(email);

      if (!status) {
        console.log("You do not have permission to sign in.");
        return false;
      } else {
        console.log("You have permission to sign in.");
        return true;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
