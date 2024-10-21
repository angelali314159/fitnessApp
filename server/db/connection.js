import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('server/config.env') });


const uri = process.env.ATLAS_URI || "";
const client = new MongoClient("mongodb+srv://angelali314159:XBYv1MgQNbdAFa0G@fitnessapp.f4ne8.mongodb.net/?retryWrites=true&w=majority&appName=FitnessApp", {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("LoginInformation").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("LoginInformation");

export default db;