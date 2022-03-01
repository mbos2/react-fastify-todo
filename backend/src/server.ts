require("dotenv").config();
import createServer from './app';
import * as AWS from "aws-sdk";
import { awsConfiguration } from './configurations/aws.config';

const PORT = process.env.PORT || 3005;
const server = createServer();

server.listen(+PORT, "0.0.0.0", (err, host) => {
  AWS.config.update(awsConfiguration);
  if (err) throw err;
  console.log(`server listening on ${host}`);
});