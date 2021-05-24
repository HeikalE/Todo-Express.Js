import express from 'express';
import { ToDoDto } from '../dtos/todo.dto';
import { ToDoService } from '../services/todo.service';

export class ToDoController{
    app: express.Application;
    todoService: ToDoService = new ToDoService();

    constructor(app: express.Application){
        this.app = app;
    }

    getTodosRoute(){
        this.app.route('/todos')
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(this.todoService.getTodos());
        });
    }

    getTodoRoute(){
        this.app.route('/todo/:id')
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(this.todoService.getTodo(+req.params.id));
        });
    }

    addTodoRoute(){
        this.app.route('/todo')
        .post((req: express.Request, res: express.Response) => {
            const todo = req.body as ToDoDto;
            this.todoService.addTodo(todo)
            res.sendStatus(200);
        });
    }
}