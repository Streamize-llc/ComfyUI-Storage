import { $el } from '../../common.js';
import HistoryItem from './HistoryItem.js';

export default class HistoryContainer {
  constructor() {
    this.historyList = [
      new HistoryItem({
        id: 1,
        title: 'Controlnet_예시',
        createdAt: new Date().toISOString,
        updatedAt: new Date().toISOString,
        entries: null,
      }),
      new HistoryItem({
        id: 2,
        title: 'Controlnet_2',
        createdAt: new Date().toISOString,
        updatedAt: new Date().toISOString,
        entries: null,
      }),
    ];

    this.createElement();
  }

  createElement() {
    this.element = $el(
      'div',
      {
        style: {
          'margin-top': '12px',
          padding: '4px 8px',
          width: '100%',
          height: '300px',
          'background-color': 'var(--comfy-input-bg)',
          border: '1px solid #4e4e4e',
          'border-radius': '8px',
          overflow: 'scroll',
        },
      },
      this.historyList.map((item) => item.getElement()),
    );
  }

  getElement() {
    return this.element;
  }
}
