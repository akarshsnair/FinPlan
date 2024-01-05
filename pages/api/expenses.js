// import { MongoClient } from 'mongodb';

// export default async function handleIncomingData(req, res) {
//   const url = 'mongodb://localhost:27017';
//   const dbName = 'dataDB';

//   try {

//     const data = req.body;
//     console.log("evidethe",data);
//     const { name, amount, tag } = data;

//     console.log('Name:', name); // Output: Name: 100
//     console.log('Amount:', amount); // Output: Amount: 123
//     console.log('Tag:', tag); // Output: Tag: Shopping
//     // Connect to MongoDB
//     const client = await MongoClient.connect(url);
//     const db = client.db(dbName);

//     // Insert the data array into the 'expenses' collection
//     const collection = db.collection('expenses');

//     await collection.insertOne({ data });

//     await client.close();

   
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error occurred while connecting to MongoDB:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


// import { MongoClient, ObjectId } from 'mongodb';

// export default async function handleIncomingData(req, res) {
//   const url = 'mongodb://localhost:27017';
//   const dbName = 'dataDB';

//   try {
//     const data = req.body;
//     console.log('Received data:', data);

//       console.log("evidethe",data);
//     const { name, amount, tag } = data;

//     console.log('Name:', name); // Output: Name: 100
//     console.log('Amount:', amount); // Output: Amount: 123
//     console.log('Tag:', tag); // Output: Tag: Shopping

//     // Connect to MongoDB
//     const client = await MongoClient.connect(url);
//     const db = client.db(dbName);
//     const collection = db.collection('expenses');

//     // Retrieve the existing document with _id: 1
//     const existingData = await collection.findOne({ _id: new ObjectId(1) });
//     console.log('Existing data:', existingData);

//     // Update the specific tag and its details in the existing data
//     if (existingData && existingData.wallet && existingData.wallet[tag]) {
//       const tagObject = existingData.wallet[tag];
//       tagObject.total += amount;
//       if (!tagObject.detail) {
//         tagObject.detail = {};
//       }
//       tagObject.detail[name] = amount;

//       // Update the modified data in MongoDB
//       await collection.updateOne(
//         { _id: ObjectId(1) },
//         { $set: { wallet: existingData.wallet } }
//       );

//       console.log('Data updated successfully!');
//     } else {
//       console.log('Tag does not exist.');
//     }

//     await client.close();

//     res.status(200).json({ message: 'Data updated successfully!' });
//   } catch (error) {
//     console.error('Error occurred while connecting to MongoDB:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


import { MongoClient } from 'mongodb';

export default async function handleIncomingData(req, res) {
  const url = 'mongodb://localhost:27017';
  const dbName = 'dataDB';

  try {
    const data = req.body; 
  
    console.log("evidethe",data);
        const { name, amount, tag } = data;
    
        console.log('Name:', name); // Output: Name: 100
        console.log('Amount:', amount); // Output: Amount: 123
        console.log('Tag:', tag); // Output: Tag: Shopping

    // Connect to MongoDB
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);

    // Get the current data from MongoDB
    const collection = db.collection('expenses');
    const existingData = await collection.findOne({ _id: 1 });
    console.log()

    // Check if the tag exists in the existing data
    if (existingData.wallet.hasOwnProperty(tag)) {
      // Increment the amount to the total inside the specific tag
      existingData.wallet[tag].total += amount;

      // Add the name and amount as key-value pairs inside the 'detail' of that tag
      existingData.wallet[tag].detail[name] = amount;

      // Update the document in MongoDB with the modified data
      await collection.updateOne({ _id: 1 }, { $set: existingData });
    } else {
      // If the tag does not exist in the existing data, create a new entry for it
      existingData.wallet[tag] = {
        total: amount,
        detail: {
          [name]: amount,
        },
      };

      // Update the document in MongoDB with the modified data
      await collection.updateOne({ _id: 1 }, { $set: existingData });
    }

    await client.close();

    res.status(200).json(data);
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
