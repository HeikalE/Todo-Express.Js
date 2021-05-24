"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoRoutingConfiguration = void 0;
const shared_routes_config_1 = require("../shared-module/router-config/shared-routes.config");
const todo_controller_1 = require("./controllers/todo.controller");
class ToDoRoutingConfiguration extends shared_routes_config_1.SharedRoutesConfig {
    constructor(app) {
        super(app, 'ToDo Routing Config');
        this.app = app;
    }
    configureRoutes() {
        const toDoController = new todo_controller_1.ToDoController(this.app);
        toDoController.getTodosRoute();
        toDoController.getTodoRoute();
        toDoController.addTodoRoute();
        return this.app;
    }
}
exports.ToDoRoutingConfiguration = ToDoRoutingConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1yb3V0aW5nLmNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9tb2R1bGVzL3RvZG8tbW9kdWxlL3RvZG8tcm91dGluZy5jb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhGQUF3RjtBQUN4RixtRUFBK0Q7QUFFL0QsTUFBYSx3QkFBeUIsU0FBUSx5Q0FBa0I7SUFJNUQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLGNBQWMsR0FBRyxJQUFJLGdDQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQixjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUIsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUFsQkQsNERBa0JDIn0=