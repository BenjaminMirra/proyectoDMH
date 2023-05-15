import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("data");

    const cards = await db
      .collection("cards")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    res.json(cards);
  } catch (e) {
    console.error(e);
  }
};