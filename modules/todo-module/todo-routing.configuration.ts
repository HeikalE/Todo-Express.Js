import express from 'express';
import { SharedRoutesConfig } from "../shared-module/router-config/shared-routes.config"
import { ToDoController } from './controllers/todo.controller';

export class ToDoRoutingConfiguration extends SharedRoutesConfig{

    app: express.Application;

    constructor(app: express.Application){
        super(app, 'ToDo Routing Config');
        this.app = app;
    }

    configureRoutes(): express.Application {
        const toDoController = new ToDoController(this.app);
        toDoController.getTodosRoute(); 
        toDoController.getTodoRoute();
        toDoController.addTodoRoute();

        return this.app;
    }
    
}