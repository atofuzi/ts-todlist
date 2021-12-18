export class Library {
  static sanitize(inputText: string){
    inputText = inputText.replace(/&/g, '&amp;');
    inputText = inputText.replace(/</g, '&lt;');
    inputText = inputText.replace(/>/g, '&gt;');
    inputText = inputText.replace(/"/g, '&quot;');
    inputText = inputText.replace(/'/g, '&#39;');
    return inputText;
  }
}