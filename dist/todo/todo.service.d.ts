import { Model } from 'mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDTO } from './dto/create-task.dto';
export declare class TodoService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    addTask(createTaskDTO: CreateTaskDTO): Promise<Task>;
    getTask(TaskID: any): Promise<Task>;
    getTasks(): Promise<Task[]>;
    editTask(taskID: any, createTaskDTO: CreateTaskDTO): Promise<Task>;
    deleteTask(taskID: any): Promise<any>;
}
