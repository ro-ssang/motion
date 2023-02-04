import Dialog from '@interfaces/Dialog';

class NoteDialog implements Dialog {
  public readonly dialogName: string = 'Note';
  private showDialog: boolean = false;
  private dialogElement: HTMLElement;

  constructor() {
    this.dialogElement = document.createElement('h2');
    this.dialogElement.innerText = 'Note Dialog Element';
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  public toggleDialog(event: MouseEvent): void {
    this.showDialog ? document.body.removeChild(this.dialogElement) : document.body.appendChild(this.dialogElement);
    this.showDialog = !this.showDialog;
  }
}

export default NoteDialog;
