import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import * as dotenv from "dotenv";
dotenv.config();

const REGION = process.env.AWS_REGION;

const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const sendEmail = async (email, subject, message) => {
  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: process.env.SENDER_EMAIL_ADDRESS,
  };

  try {
    const data = await sesClient.send(new SendEmailCommand(params));
    console.log("Greeting email sent successfully", data.MessageId);
  } catch (error) {
    console.error("Error sending greeting email", error);
  }
};
