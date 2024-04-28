import withHandler from "../../../lib/server/withHandler";
import { NextApiResponse, NextApiRequest } from "next";
import db from "../../../lib/server/db";
import bcrypt from "bcrypt";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(400).json({ error: "Email already exists" });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: "Invalid password" });
  }

  req.session.user = {
    id: user.id,
  };

  await req.session.save();

  return res.json({
    ok: true,
    redirectTo: "/",
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
