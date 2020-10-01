import { Request, Response } from "express";
import Todo, { TodoInterface } from "../models/todo";

export const allTodos = (req: Request, res: Response) => {
  Todo.find((err: Error, todos: TodoInterface[]) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(todos);
    }
  });
};

export const showTodo = (req: Request, res: Response) => {
  Todo.findById(req.params.id, (err: Error, todo: TodoInterface) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(todo);
    }
  });
};

export const addTodo = (req: Request, res: Response) => {
  const todo = new Todo(req.body);
  todo.save((err: Error) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(todo);
    }
  });
};

export const updateTodo = (req: Request, res: Response) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, (err: Error, todo: any) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(todo);
    }
  });
};

export const deleteTodo = (req: Request, res: Response) => {
  Todo.deleteOne({ _id: req.params.id }, (err: Error) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send("Todo deleted from database");
    }
  });
};
