import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('todo')
export class TodoController {

  constructor(private todoService: TodoService) { }

  // Submit a post
  @Post('/task')
  async addTask(@Res() res, @Body() createTaskDTO: CreateTaskDTO) {
    const newTask = await this.todoService.addTask(createTaskDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Task has been submitted successfully!',
      task: newTask,
    });
  }

  // Fetch a particular post using ID
  @Get('task/:taskID')
  async getTask(@Res() res, @Param('taskID', new ValidateObjectId()) taskID) {
    const task = await this.todoService.getTask(taskID);
    if (!task) {
        throw new NotFoundException('Task does not exist!');
    }
    return res.status(HttpStatus.OK).json(task);
  }

  // Fetch all posts
  @Get('tasks')
  async getTasks(@Res() res) {
    const tasks = await this.todoService.getTasks();
    return res.status(HttpStatus.OK).json(tasks);
  }

  @Put('/edit')
 async editPost(
   @Res() res,
   @Query('taskID', new ValidateObjectId()) taskID,
   @Body() createTaskDTO: CreateTaskDTO,
 ) {
   const editedTask = await this.todoService.editTask(taskID, createTaskDTO);
   if (!editedTask) {
       throw new NotFoundException('Task does not exist!');
   }
   return res.status(HttpStatus.OK).json({
     message: 'Task has been successfully updated',
     post: editedTask,
   });
 }
 @Delete('/delete')
 async deletePost(@Res() res, @Query('taskID', new ValidateObjectId()) taskID) {
   const deletedTask = await this.todoService.deleteTask(taskID);
   if (!deletedTask) {
       throw new NotFoundException('Task does not exist!');
   }
   return res.status(HttpStatus.OK).json({
     message: 'Task has been deleted!',
     post: deletedTask,
   });
 }

}
