import { showSaveDialog } from '../components/dialog.js';

export function onClickLoadButton() {
  alert('load from storage');
}

export function onClickSaveCloudButton() {
  showSaveDialog();
}
