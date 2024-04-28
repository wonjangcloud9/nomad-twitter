import withHandler from "../../../lib/server/withHandler";
import { NextApiResponse, NextApiRequest } from "next";
import db from "../../../lib/server/db";
import bcrypt from "bcrypt";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, nickname: name, password } = req.body;

  console.log(email, name, password);

  if (!email || !name || !password) {
    return res.status(400).json({ error: "Missing fields" });
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

  return res.json({
    ok: true,
  });
}

export default withHandler({ methods: ["POST"], handler });
