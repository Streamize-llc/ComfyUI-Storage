import { SAVE_BUTTON_LABEL, LOAD_BUTTON_LABEL } from '../enum/button-label.js';
import {
  onClickLoadButton,
  onClickSaveCloudButton,
} from '../utils/click-buttons.js';

export function setupUI() {
  const menu = document.querySelector('.comfy-menu');

  const separator = createSeparator();
  const saveButton = createButton(SAVE_BUTTON_LABEL, onClickSaveCloudButton);
  const loadButton = createButton(LOAD_BUTTON_LABEL, onClickLoadButton);

  menu.append(separator);
  menu.append(saveButton);
  menu.append(loadButton);
}

function createSeparator() {
  const separator = document.createElement('hr');
  separator.style.margin = '20px 0';
  separator.style.width = '100%';

  return separator;
}

function createButton(label, onclick) {
  const button = document.createElement('button');
  button.textContent = label;
  button.onclick = onclick;

  return button;
}
