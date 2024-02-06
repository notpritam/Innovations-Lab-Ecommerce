import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn", account, profile);

      const result = await createUser(user);
      if (result) {
        console.log("User created Successfully!");
      } else {
        console.log("Something went wrong");
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };
