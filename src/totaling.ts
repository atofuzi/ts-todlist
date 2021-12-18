export class Totaling {
  private static instance: Totaling;
  _notYetCount: number = 0;
  _completeCount: number = 0;

  set notYetCount(count: number) {
    this._notYetCount = count;
  }
  set completeCount(count: number) {
    this._completeCount = count;
  }
  render() {
    document.querySelector('.todo-not-yet__count')!.textContent = String(this._notYetCount)
    document.querySelector('.todo-completion__count')!.textContent = String(this._completeCount)
  }
  private constructor(){}
  static getInstance() {
    if(!Totaling.instance) {
      Totaling.instance = new Totaling();
    }
    return Totaling.instance;
  }
}