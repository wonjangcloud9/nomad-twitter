import withHandler from "../../../lib/server/withHandler";
import { NextApiResponse, NextApiRequest } from "next";
import db from "../../../lib/server/db";
import bcrypt from "bcrypt";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      error: "유효하지 않은 이메일 또는 비밀번호",
      ok: false,
    });
  }

  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return res.json({
      error: "유효 하지 않은 이메일 또는 비밀번호",
      ok: false,
    });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.json({
      error: "유효 하지 않은 이메일 또는 비밀번호",
      ok: false,
    });
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
