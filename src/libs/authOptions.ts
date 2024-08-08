import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: "jwt",
  //   maxAge: 30 * 24 * 60 * 60,
  // },
  pages: {
    signIn: '/login',
  },
  debug: true,
};
