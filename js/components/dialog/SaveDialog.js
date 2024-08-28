import { $el, ComfyDialog } from '../../common.js';
import InputBar from '../bar/InputBar.js';
import HistoryContainer from '../history/HistoryContainer.js';

export default class SaveDialog extends ComfyDialog {
  constructor() {
    super();

    const inputBar = new InputBar();
    const historyContainer = new HistoryContainer();

    const storageContainer = $el(
      'div',
      {
        style: {
          color: 'var(--fg-color)',
        },
      },
      [inputBar.getElement(), historyContainer.getElement()],
    );

    const close_button = $el('button', {
      id: 'storage-close-button',
      type: 'button',
      textContent: 'Close',
      onclick: () => this.close(),
    });

    const content = $el('div.comfy-modal-content', [
      $el('tr.storage-title', {}, [
        $el('font', { size: 6, color: 'white' }, [`ComfyUI Storage`]),
      ]),
      $el('br', {}, []),
      storageContainer,

      $el('br', {}, []),
      close_button,
    ]);

    content.style.width = '100%';
    content.style.height = '100%';

    this.element = $el(
      'div.comfy-modal',
      { id: 'storage-dialog', parent: document.body },
      [content],
    );
  }

  show() {
    this.element.style.display = 'block';
  }
}
