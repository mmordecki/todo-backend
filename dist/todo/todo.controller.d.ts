import { TodoService } from './todo.service';
import { CreateTaskDTO } from './dto/create-task.dto';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    addTask(res: any, createTaskDTO: CreateTaskDTO): Promise<any>;
    getTask(res: any, taskID: any): Promise<any>;
    getTasks(res: any): Promise<any>;
    editPost(res: any, taskID: any, createTaskDTO: CreateTaskDTO): Promise<any>;
    deletePost(res: any, taskID: any): Promise<any>;
}
