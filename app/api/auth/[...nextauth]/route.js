import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import User from "@/models/Users";
import { dbConnect } from "@/utils/db/config";
import bcrypt from "bcryptjs"
//import { signJwtToken } from "@/utils/jwt/jwt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            async authorize(credentials, req){
                const {username, password} = credentials;

                await dbConnect();
                const user = await User.findOne({ username });
                if(!user){
                    throw new Error("Invalid Input");
                }
                //const hasedPwd = await bcrypt.hash(password, 10)
                const comparePassword = await bcrypt.compare(password, user.password);
                if(!comparePassword){
                    throw new Error("Invalid Username or Password")
                }
                else{
                    const new_user = {
                        id: user._id,
                        email: user.email,
                        username: user.username,
                        role: user.role
                    }
                
                   return new_user
                }
            }
        })
    ],
    session: {strategy: 'jwt'},
    secret: process.env.NEXTAUTH_SECRET,
    
    callbacks: {
        async jwt({ user, token }) {
          if (user) {
            token.user = user;
          }
          return token;
        },
        async session({ session, token }) {
          session.user = token.user;
          return session;
        },
       },
    pages: {
        signIn: '/',
        signOut: '/'
    },
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}