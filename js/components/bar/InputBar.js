import { $el } from '../../common.js';
import { Input, Button } from '../common/index.js';

export default class InputBar {
  constructor() {
    this.cloudName = new Input({
      id: 'storage-cloud-name-input',
      label: '이름',
      placeholder: '클라우드에 저장할 이름을 입력하세요.',
      inputStyle: {
        width: '400px',
      },
    });

    this.version = new Input({
      id: 'storage-version-input',
      label: '버전명',
      placeholder: 'v1, v2, v3 입력 가능',
    });

    this.saveButton = new Button({
      id: 'storage-save-button',
      label: '저장',
      onClick: () => {
        this.save();
      },
    });

    this.createElement();
  }

  createElement() {
    this.element = $el(
      'div',
      {
        style: {
          display: 'flex',
          gap: '8px',
          'align-items': 'flex-end',
        },
      },
      [
        this.cloudName.getElement(),
        this.version.getElement(),
        this.saveButton.getElement(),
      ],
    );
  }

  save() {
    alert(
      `이름: ${this.cloudName.getValue()}, 버전: ${this.version.getValue()}`,
    );
  }

  getElement() {
    return this.element;
  }
}
