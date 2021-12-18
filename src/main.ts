import { Todo } from "./todo";
import { TodoList } from "./todoList";

class RegisterTodo {
  static register(): void {
    const task = <HTMLInputElement>document.getElementById('js-input-task')
    if(task.value){
      new Todo(task.value);
      task.value = '';
    }
  }
}

const btn = document.querySelector<HTMLButtonElement>('.js-register')
if(btn) {
  btn.addEventListener('click', RegisterTodo.register);
}

const todoList = TodoList;
