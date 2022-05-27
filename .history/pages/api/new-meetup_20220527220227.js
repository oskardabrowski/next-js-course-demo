// /api/new-meetup

import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { title, image, address, description } = data;

    MongoClient.connect(
      "mongodb+srv://learning:mongodblearning@cluster0.oabxf.mongodb.net/?retryWrites=true&w=majority"
    );
  }
}

export default handler;
