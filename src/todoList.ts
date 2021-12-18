import { Totaling } from "./totaling";

export class TodoList {
  private static instance: TodoList;
  private constructor() {
    Totaling.updateTotaling(TodoList.getTodoListElement());
  }
  static getTodoListElement(): NodeListOf<HTMLInputElement> {
    return document.querySelectorAll<HTMLInputElement>('.todo-list__check');
  }
  static getInstance(): TodoList {
    if(!TodoList.instance) { 
      TodoList.instance = new TodoList;
    }
    return TodoList.instance
  }
}