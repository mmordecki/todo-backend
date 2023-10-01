import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) { }

  async addTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const newTask = await new this.taskModel(createTaskDTO);
    return newTask.save();
  }

  async getTask(TaskID): Promise<Task> {
    const task = await this.taskModel
      .findById(TaskID)
      .exec();
    return task;
  }

  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskModel.find().exec();
    return tasks;
  }

  async editTask(taskID, createTaskDTO: CreateTaskDTO): Promise<Task> {
    const editedTask = await this.taskModel
      .findByIdAndUpdate(taskID, createTaskDTO, { new: true });
    return editedTask;
  }

  async deleteTask(taskID): Promise<any> {
    const deletedTask = await this.taskModel
      .findByIdAndRemove(taskID);
    return deletedTask;
  }
}
