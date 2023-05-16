import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("data");

    const texts = await db
      .collection("texts")
      .find();

    res.json(texts);
  } catch (e) {
    console.error(e);
  }
};