import { MongoClient } from 'mongodb';



export default async function handler(req, res) {
  const url = "mongodb://0.0.0.0:27017/";
  const dbName = 'dataDB';

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('expenses');

    // Fetch all expenses data
    const data = await collection.find().toArray();

    await client.close();

    res.status(200).json(data); // Sending JSON response
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' }); // Sending JSON response for error
  }
}

// const { MongoClient } = require('mongodb');

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid environment variable: "MONGODB_URI"');
// }

// const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local');
// }

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// module.exports = clientPromise;
