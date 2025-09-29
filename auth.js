import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./lib/db/client";
import GoogleProvider from "next-auth/providers/google";
import Google from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Github from "next-auth/providers/github";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    adapter: MongoDBAdapter(client, { databaseName: process.env.DB_NAME }),
    providers: [
        Google,
        Github
        // GoogleProvider({
        //     clientId: process.env.AUTH_GOOGLE_ID,
        //     clientSecret: process.env.AUTH_GOOGLE_SECRET
        // }),
        // GithubProvider({
        //     clientId: process.env.AUTH_GITHUB_ID,
        //     clientSecret: process.env.AUTH_GITHUB_SECRET
        // })
    ]
});
