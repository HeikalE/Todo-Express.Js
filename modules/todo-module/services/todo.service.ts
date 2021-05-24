import { toDoData } from '../../../todo-data/ToDoData';
import { ToDoDto } from '../dtos/todo.dto';
import { ToDoInterface } from '../interfaces/todo.interface';
import { ToDoMapper } from '../mapper/todoMapper';
import { ToDoModel } from '../models/todo.model';

export class ToDoService implements ToDoInterface {

    context = toDoData;

    getTodos(): ToDoDto[] {
        const todos: ToDoModel[] = this.context.getTodos();
        return ToDoMapper.mapToDtos(todos);
    }

    getTodo(id: number): ToDoDto {
        const todo: ToDoModel = this.context.getTodo(id);
        return ToDoMapper.mapToDto(todo);
    }
    
    addTodo(newToDoDto: ToDoDto): void {
        this.context.addTodo(ToDoMapper.mapToToDo(newToDoDto));
    }
    
}