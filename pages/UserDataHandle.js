// import { useEffect } from 'react';
// import { useSession } from 'next-auth/react';
// import { MongoClient } from 'mongodb';

// const UserDataInsert = () => {
//   const { data, status } = useSession();

//   useEffect(() => {
//     if (status === 'authenticated' && data?.user) {
//       const { email, name } = data.user;
//       const url = process.env.MONGODB_URI;
//       const dbName = process.env.MONGODB_DB;

//       const insertUserData = async () => {
//         try {
//           const client = await MongoClient.connect(url, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//           });

//           const db = client.db(dbName);
//           await db.collection('users').updateOne(
//             { email },
//             {
//               $setOnInsert: { name, email },
//               $set: { lastLogin: new Date() },
//             },
//             { upsert: true }
//           );

//           console.log('User data inserted successfully.');
//           client.close();
//         } catch (error) {
//           console.error('Error inserting user data:', error);
//         }
//       };

//       insertUserData();
//     }
//   }, [status, data]);

//   return null; // This component doesn't render anything
// };

// export default UserDataInsert;
