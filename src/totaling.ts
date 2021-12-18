export class Totaling {
  static notYetCount: number = 0;
  static completeCount: number = 0;
  static render(): void {
    document.querySelector('.todo-not-yet__count')!.textContent = String(this.notYetCount)
    document.querySelector('.todo-completion__count')!.textContent = String(this.completeCount)
  }
  static updateTotaling(elements: NodeListOf<HTMLInputElement>): void {
    this.completeCount = 0;
    this.notYetCount = 0;
    if(elements){
      elements.forEach(element => {
        if(element.checked) {
          this.completeCount += 1;
        } else {
          this.notYetCount += 1;
        }
      })
      Totaling.render();
    }
  }
}