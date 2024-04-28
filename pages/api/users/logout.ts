import withHandler from "../../../lib/server/withHandler";
import { NextApiResponse, NextApiRequest } from "next";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  return res.json({
    ok: true,
    redirectTo: "/",
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
