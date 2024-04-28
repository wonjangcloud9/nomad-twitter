import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../lib/server/withSession";
import withHandler from "../../../lib/server/withHandler";
import db from "../../../lib/server/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { title, description, id },
    session: { user },
  } = req;

  console.log("fdsfsdaafsd");

  if (!user) {
    return res.status(401).json({ message: "로그인이 필요합니다." });
  }
  if (req.method === "GET") {
    console.log("d?");
    return res.json({ ok: true });
  }
  if (req.method === "POST") {
    console.log("tt?");
    const tweet = await db.tweet.create({
      data: {
        title,
        description,
        user: {
          connect: {
            id: id,
          },
        },
      },
    });
    res.json({
      ok: true,
      tweet,
    });
  }

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
