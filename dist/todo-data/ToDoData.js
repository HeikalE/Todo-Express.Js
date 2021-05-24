"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoData = void 0;
class ToDoData {
    constructor() {
        this.todoModels = [];
    }
    getTodos() {
        return this.todoModels;
    }
    getTodo(id) {
        return this.todoModels.find(t => t.id == id);
    }
    addTodo(addedTodo) {
        this.todoModels.push(addedTodo);
    }
}
exports.toDoData = new ToDoData();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9Eb0RhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90b2RvLWRhdGEvVG9Eb0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBTSxRQUFRO0lBQWQ7UUFDSSxlQUFVLEdBQWdCLEVBQUUsQ0FBQztJQWFqQyxDQUFDO0lBWEcsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQVU7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQWMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQW9CO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSjtBQUVZLFFBQUEsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUMifQ==