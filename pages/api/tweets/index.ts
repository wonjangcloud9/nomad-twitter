import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../lib/server/withSession";
import withHandler from "../../../lib/server/withHandler";
import db from "../../../lib/server/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { title, description, id },
    session: { user },
  } = req;

  if (!user) {
    return res.status(401).json({ message: "로그인이 필요합니다." });
  }
  if (req.method === "GET") {
    const tweets = await db.tweet.findMany({
      include: {
        _count: {
          select: { favs: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json({
      ok: true,
      tweets,
    });
  }
  if (req.method === "POST") {
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
}

export default withApiSession(
  withHandler({
    methods: ["GET", "POST"],
    handler,
  })
);
