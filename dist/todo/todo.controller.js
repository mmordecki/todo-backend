"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const validate_object_id_pipes_1 = require("./shared/pipes/validate-object-id.pipes");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async addTask(res, createTaskDTO) {
        const newTask = await this.todoService.addTask(createTaskDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task has been submitted successfully!',
            task: newTask,
        });
    }
    async getTask(res, taskID) {
        const task = await this.todoService.getTask(taskID);
        if (!task) {
            throw new common_1.NotFoundException('Task does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json(task);
    }
    async getTasks(res) {
        const tasks = await this.todoService.getTasks();
        return res.status(common_1.HttpStatus.OK).json(tasks);
    }
    async editPost(res, taskID, createTaskDTO) {
        const editedTask = await this.todoService.editTask(taskID, createTaskDTO);
        if (!editedTask) {
            throw new common_1.NotFoundException('Task does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task has been successfully updated',
            post: editedTask,
        });
    }
    async deletePost(res, taskID) {
        const deletedTask = await this.todoService.deleteTask(taskID);
        if (!deletedTask) {
            throw new common_1.NotFoundException('Task does not exist!');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task has been deleted!',
            post: deletedTask,
        });
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Post)('/task'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_task_dto_1.CreateTaskDTO]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "addTask", null);
__decorate([
    (0, common_1.Get)('task/:taskID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('taskID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTask", null);
__decorate([
    (0, common_1.Get)('tasks'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Put)('/edit'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('taskID', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_task_dto_1.CreateTaskDTO]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "editPost", null);
__decorate([
    (0, common_1.Delete)('/delete'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('taskID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deletePost", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map