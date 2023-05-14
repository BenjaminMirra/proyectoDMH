import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("data");

    const texts = await db
      .collection("texts")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    res.json(texts);
  } catch (e) {
    console.error(e);
  }
};