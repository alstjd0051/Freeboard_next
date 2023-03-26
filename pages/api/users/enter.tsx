import twilio from "twilio";
import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, {
  ResponseType,
} from "@/components/commons/libs/server/withHandler";
import { client } from "@/components/commons/libs/server/client";
import { isAwaitKeyword } from "typescript";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_API_KEY!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    /* const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `Your Login token is ${payload}`,
    }); */
    // console.log(message);
  } else if (email) {
    /* const email = await mail.send({
      from: "wsc7202@gmail.com",
      to: "wsc7202@gmail.com",
      subject: "당신의 이메일을 확인하시겠습니까?",
      text: `Your Token is ${payload}`,
      html: `<strong>Your Token is ${payload}</strong>`,
    });
    console.log(email); */
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
