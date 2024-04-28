import withHandler from "../../../lib/server/withHandler";
import { NextApiResponse, NextApiRequest } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.status(200).json({ ok: true });
}

export default withHandler({ methods: ["POST"], handler });
