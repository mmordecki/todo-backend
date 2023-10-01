import { Document } from 'mongoose';

export interface Task extends Document {
  readonly taskName: string;
  readonly completedTask: boolean;
}
