import mongoose, { Schema, Document, Model } from "mongoose";

export interface TodoInterface extends Document {
  text: string;
  isDone: boolean;
}

const TodoSchema: Schema = new Schema({
  text: { type: String, required: true },
  isDone: { type: Boolean, default: false },
});

const TodoModel: Model<TodoInterface> = mongoose.model<TodoInterface>(
  "Todo",
  TodoSchema
);
export default TodoModel;
