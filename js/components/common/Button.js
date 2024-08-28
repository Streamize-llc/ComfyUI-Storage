import { $el } from '../../common.js';

export class Button {
  constructor({ id, label, onClick }) {
    this.id = id;
    this.label = label;
    this.onClick = onClick;

    this.createElement();
  }

  createElement() {
    this.element = $el('button', {
      id: this.id,
      textContent: this.label,
      onclick: this.onClick,
      style: { padding: '4px 16px', width: '80px', height: '50px' },
    });
  }

  getElement() {
    return this.element;
  }
}
