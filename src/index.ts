import DialogButton from '@components/Buttons/DialogButton';
import NoteDialog from '@components/Dialogs/NoteDialog';
import VideoDialog from '@components/Dialogs/VideoDialog';

const rootElement = document.getElementById('root');

const greetingElemnt = document.createElement('h1');
greetingElemnt.innerText = 'Welcome to Motion 👋';

if (rootElement) {
  rootElement.appendChild(greetingElemnt);

  // Dialogs
  const noteDialog = new NoteDialog();
  const videoDialog = new VideoDialog();

  // Dialog buttons
  const dialogButtons = [new DialogButton(noteDialog), new DialogButton(videoDialog)];

  dialogButtons.forEach((button) => {
    rootElement.appendChild(button.render());
  });
}
