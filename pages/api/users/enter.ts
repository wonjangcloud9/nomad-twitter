import withHandler from "../../../lib/server/withHandler";
import { NextApiResponse, NextApiRequest } from "next";
import db from "../../../lib/server/db";
import bcrypt from "bcrypt";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, nickname: name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (await db.user.findUnique({ where: { email } })) {
    return res.status(400).json({ error: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  if (!user) {
    return res.status(500).json({ error: "Failed to create user" });
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
