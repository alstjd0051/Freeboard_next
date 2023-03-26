import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, {
  ResponseType,
} from "@/components/commons/libs/server/withHandler";
import { client } from "@/components/commons/libs/server/client";
import { isAwaitKeyword } from "typescript";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!exists) res.status(404).end();
  console.log(exists);
  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "freeboard_session",
  password:
    "128739081290389012839081289038901283812908390128390128739081290389012839081289038901283812908390128390128739081290389012839081289038901283812908390128390",
});
