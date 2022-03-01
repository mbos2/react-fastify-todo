import * as AWS from 'aws-sdk';
import { awsConfiguration } from "../configurations/aws.config";
import { toDoAPI } from "../services/todo.service";

export default function toDoRoute(server, options, next) {
  const db = new AWS.DynamoDB(awsConfiguration);
  server.get("/", async function (request, reply) {
    return toDoAPI.getAllItems(db);
  });

  server.post("/", async (req, reply) => {
    const result = await toDoAPI.createTodoItem(db, req.body)
    return result.httpRequest.body;
  });

  server.put("/", (req, res) => {
    res.code(200).send({ method: "put" });
  });

  server.delete("/", async (req, res) => {    
    console.log(res.request.body);
    const result = await toDoAPI.deleteTodoItem(db, res.request.body);
    return result.httpRequest.body;
  });

  next();
}
