import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("dataDB");
    const { id } = req.query;

    const post = await db.collection("expenses").findOne({
      _id: ObjectId(id), // Use the provided id to create an ObjectId
    });

    console.log("post", post); // Print the retrieved data
    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};