"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoService = void 0;
const ToDoData_1 = require("../../../todo-data/ToDoData");
const todoMapper_1 = require("../mapper/todoMapper");
class ToDoService {
    constructor() {
        this.context = ToDoData_1.toDoData;
    }
    getTodos() {
        const todos = this.context.getTodos();
        return todoMapper_1.ToDoMapper.mapToDtos(todos);
    }
    getTodo(id) {
        const todo = this.context.getTodo(id);
        return todoMapper_1.ToDoMapper.mapToDto(todo);
    }
    addTodo(newToDoDto) {
        this.context.addTodo(todoMapper_1.ToDoMapper.mapToToDo(newToDoDto));
    }
}
exports.ToDoService = ToDoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbW9kdWxlcy90b2RvLW1vZHVsZS9zZXJ2aWNlcy90b2RvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMERBQXVEO0FBR3ZELHFEQUFrRDtBQUdsRCxNQUFhLFdBQVc7SUFBeEI7UUFFSSxZQUFPLEdBQUcsbUJBQVEsQ0FBQztJQWdCdkIsQ0FBQztJQWRHLFFBQVE7UUFDSixNQUFNLEtBQUssR0FBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuRCxPQUFPLHVCQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQUMsRUFBVTtRQUNkLE1BQU0sSUFBSSxHQUFjLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sdUJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU8sQ0FBQyxVQUFtQjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FFSjtBQWxCRCxrQ0FrQkMifQ==