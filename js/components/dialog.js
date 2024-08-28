import SaveDialog from './dialog/SaveDialog.js';

let storage_instance = null;

export function setStorageInstance(obj) {
  storage_instance = obj;
}

export function showSaveDialog() {
  if (!storage_instance) {
    setStorageInstance(new SaveDialog());
  }
  storage_instance.show();
}
