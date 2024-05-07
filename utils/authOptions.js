import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    provider: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    callbacks: {
        // Invoked on successful sign in.
        async signIn({profile}) {
            // 1. connect to database
            // 2. check if user exists
            // 3. if not, then add user to database
            // 4. return true to allow sign in
        },
        // Modifies the session object
        async session({session}) {
            // 1. connect to database
            // 2. get user data
            // 3. Assign user ide to the session object
            // 3. return sesion object
        },
    }
}