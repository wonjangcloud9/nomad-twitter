import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../../lib/server/withSession";
import withHandler from "../../../../lib/server/withHandler";
// import db from "../../../../lib/server/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  console.log("Hello", id, user);

  res.json({ ok: true });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);
