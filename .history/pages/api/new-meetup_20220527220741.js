// /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://learning:mongodblearning@cluster0.oabxf.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
  }
}

export default handler;
