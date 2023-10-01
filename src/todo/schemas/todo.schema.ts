import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  taskName: String,
  completedTask: Boolean,
});
