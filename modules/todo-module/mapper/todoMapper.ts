import { ToDoDto } from "../dtos/todo.dto";
import { ToDoModel } from "../models/todo.model";

export class ToDoMapper{

    static mapToDto(todo: ToDoModel): ToDoDto{
        return new ToDoDto(todo.id , todo.title);
    }

    static mapToToDo(todo: ToDoDto): ToDoModel{
        return {id: todo.id, title: todo.title} as ToDoModel;
    }

    static mapToDtos(todos: ToDoModel[]): ToDoDto[]{
        const result: ToDoDto[] = [];
        todos.forEach(item => {
            result.push(this.mapToDto(item));
        });

        return result;
    }

    static mapToToDos(todoDtos: ToDoDto[]): ToDoModel[]{
        const result: ToDoModel[] = [];
        todoDtos.forEach(item => {
            result.push(this.mapToToDo(item));
        });

        return result;
    }
}