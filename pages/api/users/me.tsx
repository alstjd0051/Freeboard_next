import { client } from "@/components/commons/libs/server/client";
import withHandler, {
  ResponseType,
} from "@/components/commons/libs/server/withHandler";
import { withApiSession } from "@/components/commons/libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(
  withHandler({
    method: "GET",
    handler,
    isPrivate: true,
  })
);
