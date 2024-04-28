import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../../lib/server/withSession";
import withHandler from "../../../../lib/server/withHandler";
import db from "../../../../lib/server/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const tweet = await db.tweet.findUnique({
    where: { id: +id.toString() },
    include: {
      user: {
        select: { name: true, id: true },
      },
    },
  });
  if (!tweet) {
    return res.status(404).json({ ok: false });
  }
  const favs = await db.fav.findMany({
    where: {
      tweetId: tweet.id,
    },
    select: { id: true },
  });

  res.json({
    ok: true,
    tweet,
    favs,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
