import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoClient } from 'mongodb';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
   },
   callbacks: {
    async signIn(user, account, profile) {
      const { email, name } = user;
    
      try {
        console.log('User data:', user);
    
        const client = await MongoClient.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        const db = client.db( process.env.MONGODB_DB); 
        console.log('MongoDB connected.');
    
        const result = await db.collection('users').updateOne(
          { email }, // Use email as a unique identifier for the user
          {
            $setOnInsert: {name, email}, // Insert email and name if the user doesn't exist
            $set: { lastLogin: new Date() }, // Update the lastLogin timestamp on every sign-in
          },
          { upsert: true } // Set upsert to true to insert if the user doesn't exist
        );
        console.log('Result:', result);
    
      } catch (error) {
        console.error('Error saving user data:', error);
      }
      return true;
    },    
  },
  // Add other NextAuth configurations if needed
}

export default NextAuth(authOptions)