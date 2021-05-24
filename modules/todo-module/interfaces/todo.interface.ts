import { ToDoDto } from "../dtos/todo.dto";

export interface ToDoInterface{
    getTodos(): ToDoDto[];
    getTodo(id: number): ToDoDto;
    addTodo(newToDoDto: ToDoDto): void;
}