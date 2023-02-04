import Dialog from '@interfaces/Dialog';

class DialogButton {
  private buttonElement: HTMLElement;

  constructor(private dialog: Dialog) {
    this.buttonElement = document.createElement('button');
    this.buttonElement.innerText = this.dialog.dialogName;
    this.buttonElement.addEventListener('click', this.dialog.toggleDialog);
  }

  public render(): HTMLElement {
    return this.buttonElement;
  }
}

export default DialogButton;
