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
  console.log(token);
  res.status(200).end();
}

export default withHandler("POST", handler);
