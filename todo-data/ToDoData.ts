import { ToDoModel } from "../modules/todo-module/models/todo.model";

class ToDoData {
    todoModels: ToDoModel[] = [];

    getTodos(): ToDoModel[]{
        return this.todoModels;
    }
    
    getTodo(id: number): ToDoModel{
        return this.todoModels.find(t => t.id == id) as ToDoModel;
    }

    addTodo(addedTodo: ToDoModel): void{
        this.todoModels.push(addedTodo);
    }
}

export const toDoData = new ToDoData();