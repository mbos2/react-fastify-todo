import { ConfigurationOptions } from "aws-sdk";

export const awsConfiguration: ConfigurationOptions = {
  region: process.env.REGION,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
};
