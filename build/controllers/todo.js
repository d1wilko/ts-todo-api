"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.showTodo = exports.allTodos = void 0;
const todo_1 = __importDefault(require("../models/todo"));
exports.allTodos = (req, res) => {
    todo_1.default.find((err, todos) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.send(todos);
        }
    });
};
exports.showTodo = (req, res) => {
    todo_1.default.findById(req.params.id, (err, todo) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.send(todo);
        }
    });
};
exports.addTodo = (req, res) => {
    const todo = new todo_1.default(req.body);
    todo.save((err) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.send(todo);
        }
    });
};
exports.updateTodo = (req, res) => {
    todo_1.default.findByIdAndUpdate(req.params.id, req.body, (err, todo) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.send(todo);
        }
    });
};
exports.deleteTodo = (req, res) => {
    todo_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.send("Todo deleted from database");
        }
    });
};
