import { TodoList } from "./todoList";
import { Totaling } from "./totaling";
import { Library } from "./lib";

interface Todoable {
  task: string;
  taskElement: HTMLDivElement;
  createTaskElement(inputTask: string): void;
  deleteTaskElement(): void;
  changeTaskStatus(): void;
}

export class Todo implements Todoable {
  task: string = '';
  taskElement: HTMLDivElement;
    constructor(initTask: string) {
      this.task = initTask;
      const elt = this.createTaskElement(this.task);
      this.taskElement = elt;
    }
  createTaskElement(inputTask: string): HTMLDivElement {
    // div要素を生成
    let div_element = <HTMLDivElement>document.createElement('div');
    div_element.className = 'todo-list__item';

    // input要素を生成
    let input_element = <HTMLInputElement>document.createElement('input');
    input_element.className = 'todo-list__check';
    input_element.type = 'checkbox';
    input_element.addEventListener('click', this.changeTaskStatus.bind(this));

    // span要素を生成
    let span_element = <HTMLSpanElement>document.createElement('span');
    span_element.className = 'todo-list__text';
    span_element.innerHTML = Library.sanitize(inputTask);
 
    // button要素を生成
    let btn_element = <HTMLButtonElement>document.createElement('button');
    btn_element.className = 'todo-list__delete-btn';
    btn_element.innerHTML = '削除';
    btn_element.addEventListener('click', this.deleteTaskElement.bind(this));
    // 親のdiv要素に各要素を追加
    div_element.appendChild(input_element);
    div_element.appendChild(span_element);
    div_element.appendChild(btn_element);

    // 作成した要素を追加
    let todoListElements = <HTMLDivElement>document.getElementById('todo-list');
    todoListElements.appendChild(div_element);
    Totaling.updateTotaling(TodoList.getTodoListElement());
    return div_element; 
  }
  deleteTaskElement() {
    this.taskElement.remove();
    Totaling.updateTotaling(TodoList.getTodoListElement());
  }
  changeTaskStatus() {
    Totaling.updateTotaling(TodoList.getTodoListElement());
  }
}