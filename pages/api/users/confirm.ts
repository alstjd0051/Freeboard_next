import { NextApiRequest, NextApiResponse } from "next";
import withHandler, {
  ResponseType,
} from "@/components/commons/libs/server/withHandler";
import client from "@/components/commons/libs/server/client";
import { withApiSession } from "@/components/commons/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!foundToken) return res.status(404).end();
  req.session.user = {
    id: foundToken.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({ method: "POST", handler, isPrivate: false })
);
