import { Totaling } from "./totaling";

export class TodoList {
  private static instance: TodoList;
  //elements = document.querySelectorAll<HTMLInputElement>('.todo-list__check');
  completeCount: number = 0;
  notYetCount: number = 0;
  private constructor() {
    this.updateTotaling();
  }
  updateTotaling() {
    this.completeCount = 0;
    this.notYetCount = 0;
    const elements = document.querySelectorAll<HTMLInputElement>('.todo-list__check');
    console.log(elements);
    if(elements){
      elements.forEach(element => {
        if(element.checked) {
          this.completeCount += 1;
        } else {
          this.notYetCount += 1;
        }
      })
      const totaling = Totaling.getInstance();
      totaling.completeCount = this.completeCount;
      totaling.notYetCount = this.notYetCount;
      totaling.render();
    }
  }
  static getInstance(){
    if(!TodoList.instance) { 
      TodoList.instance = new TodoList;
    }
    return TodoList.instance
  }
}