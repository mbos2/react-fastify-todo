import { DynamoDB } from "aws-sdk";
import { errorAPI } from "./error-handling.service";
import { ToDoScheme } from "../schemes/todo.scheme";

const tableName = "todo";
const toDoParams = {
  TableName: "todo",
};

function generateId() {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const toDoAPI = {
  getAllItems: async (client: DynamoDB) => {
    const items = await client
      .scan(toDoParams, function (err, data) {
        if (err) {
          return errorAPI.dynamoDbErrorInput(client, err);
        }
        return data;
      })
      .promise();

    return items.Items;
  },
  createTodoItem: async (client: DynamoDB, request: string) => {
    const item: any = {
      index: {
        N: generateId(),
      },
      dateCreated: {
        S: JSON.stringify(Date.now()),
      },
      item: {
        S: JSON.stringify({ value: request }),
      },
    };
    return client.putItem(
      {
        Item: item,
        TableName: tableName
      },
      function (err) {
        if (err !== null) return errorAPI.dynamoDbErrorInput(client, err);
      }
    );
  },
  deleteTodoItem: async (client: DynamoDB, request) => {
    console.log(request.item.S);
    console.log(JSON.stringify(request.item.S));
    console.log(JSON.parse(request.item.S));
    const itemParams: any = {
      Key: {
        index: {
          N: request.index.N,
        },
        dateCreated: {
          S: request.dateCreated.S,
        }
      },
      TableName: tableName,
    };
    return client.deleteItem(itemParams, function (err) {
      if (err !== null) {
        console.log(err);
        return errorAPI.dynamoDbErrorInput(client, err);
      }
    });
  },
};
