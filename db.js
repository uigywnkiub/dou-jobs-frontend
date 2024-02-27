import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const collection = client
  .db(process.env.DB_NAME)
  .collection(process.env.DB_COLLECTION);

const objectId = new ObjectId("65da573a1438f76d76dc4c66");

export const db = {
  client,
  collection,
  objectId,
};
