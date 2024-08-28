import { $el } from '../../common.js';

export class Input {
  constructor({ id, label = '', placeholder = '', inputStyle }) {
    this.id = id;
    this.label = label;
    this.placeholder = placeholder;
    this.inputStyle = inputStyle;

    this.createElement();
  }

  createElement() {
    this.createLabelElement();
    this.createInputElement();

    this.element = $el('div', [this.labelElement, this.inputElement]);
  }

  createInputElement() {
    this.inputElement = $el('input', {
      id: this.id,
      placeholder: this.placeholder,
      style: {
        'font-size': '20px',
        padding: '12px 16px',
        height: '50px',
        ...this.inputStyle,
      },
    });
  }

  createLabelElement() {
    this.labelElement = $el('label', {
      for: this.id,
      textContent: this.label,
      style: {
        display: 'block',
      },
    });
  }

  getElement() {
    return this.element;
  }

  getValue() {
    return this.inputElement.value;
  }
}
