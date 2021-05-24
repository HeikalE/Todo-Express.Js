"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoMapper = void 0;
const todo_dto_1 = require("../dtos/todo.dto");
class ToDoMapper {
    static mapToDto(todo) {
        return new todo_dto_1.ToDoDto(todo.id, todo.title);
    }
    static mapToToDo(todo) {
        return { id: todo.id, title: todo.title };
    }
    static mapToDtos(todos) {
        const result = [];
        todos.forEach(item => {
            result.push(this.mapToDto(item));
        });
        return result;
    }
    static mapToToDos(todoDtos) {
        const result = [];
        todoDtos.forEach(item => {
            result.push(this.mapToToDo(item));
        });
        return result;
    }
}
exports.ToDoMapper = ToDoMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb01hcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZHVsZXMvdG9kby1tb2R1bGUvbWFwcGVyL3RvZG9NYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTJDO0FBRzNDLE1BQWEsVUFBVTtJQUVuQixNQUFNLENBQUMsUUFBUSxDQUFDLElBQWU7UUFDM0IsT0FBTyxJQUFJLGtCQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBYTtRQUMxQixPQUFPLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQWMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFrQjtRQUMvQixNQUFNLE1BQU0sR0FBYyxFQUFFLENBQUM7UUFDN0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQW1CO1FBQ2pDLE1BQU0sTUFBTSxHQUFnQixFQUFFLENBQUM7UUFDL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQTNCRCxnQ0EyQkMifQ==