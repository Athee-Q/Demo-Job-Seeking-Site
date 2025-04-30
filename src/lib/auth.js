import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // 🔥 Here you can fetch from your database or API
        // I'm hardcoding for demo
        if (email === "user@talenthive.com" && password === "123456") {
          return {
            id: 1,
            name: "User One",
            email: "user@talenthive.com",
          };
        }

        // ❌ If user not found, return null
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },


  // 🔒 Sessions: we can use JWT
  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login", // custom login page
    error: "/login", // error page
  },

  secret: process.env.NEXTAUTH_SECRET ,
};

export const handler = NextAuth(authOptions);
