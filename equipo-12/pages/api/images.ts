import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("images");

    const images = await db
      .collection("images")
      .find({})
      .sort({ metacritic: -1 })
      .limit(2)
      .toArray();

    res.json(images);
  } catch (e) {
    console.error(e);
  }
};