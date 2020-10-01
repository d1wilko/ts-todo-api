import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import config from "./config";
import connect from "./connect";
import * as TodoController from "./controllers/todo";

const app: Application = express();
const PORT: number = 8000;

connect(config.db);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/todos", TodoController.allTodos);

app.get("/todos/:id", TodoController.showTodo);

app.post("/todos", TodoController.addTodo);

app.patch("/todos/:id", TodoController.updateTodo);

app.delete("/todos/:id", TodoController.deleteTodo);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
