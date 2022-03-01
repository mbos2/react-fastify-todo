import { DynamoDB, AWSError } from "aws-sdk";

export const errorAPI = {
  dynamoDbErrorInput: async (client: DynamoDB, error: AWSError) => {
    const date = new Date();
    const item = {
      "error": {
        S: JSON.stringify(error)
      },
      "date": {
        S: JSON.stringify(new Date())
      }
    };
    client.putItem({
      Item: item,
      TableName: "errors",
    }, function(err) {});
  },
};