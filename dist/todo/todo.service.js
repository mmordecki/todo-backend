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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TodoService = class TodoService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async addTask(createTaskDTO) {
        const newTask = await new this.taskModel(createTaskDTO);
        return newTask.save();
    }
    async getTask(TaskID) {
        const task = await this.taskModel
            .findById(TaskID)
            .exec();
        return task;
    }
    async getTasks() {
        const tasks = await this.taskModel.find().exec();
        return tasks;
    }
    async editTask(taskID, createTaskDTO) {
        const editedTask = await this.taskModel
            .findByIdAndUpdate(taskID, createTaskDTO, { new: true });
        return editedTask;
    }
    async deleteTask(taskID) {
        const deletedTask = await this.taskModel
            .findByIdAndRemove(taskID);
        return deletedTask;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Task')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TodoService);
//# sourceMappingURL=todo.service.js.map