import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@/components/commons/libs/server/withHandler";
import { client } from "@/components/commons/libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });

  console.log(user);
  /* if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("founded");
    if (!user) {
      console.log("Did not found will create");
      user = await client.user.create({
        data: {
          name: "Anonymouse",
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("founded");
    if (!user) {
      console.log("Did not found will create");
      user = await client.user.create({
        data: {
          name: "Anonymouse",
          phone: +phone,
        },
      });
    }
    console.log(user);
  } */
  return res.status(200).end();
}

export default withHandler("POST", handler);