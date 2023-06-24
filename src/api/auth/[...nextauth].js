import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.JWT_TOKEN,

    callbacks: {
        async signInError(error, _) {
            if (error.status === 401) {
              // Handle 401 Unauthorized errors
              return '/error';
            }
            throw error;
          },
      },
})