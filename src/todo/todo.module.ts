import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose'; // add this
import { TodoSchema } from './schemas/todo.schema'; // and this

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Task', schema: TodoSchema }]),
    ], // add
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
