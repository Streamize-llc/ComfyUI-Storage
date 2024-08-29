import { $el } from '../../common.js';
import { formatISOString } from '../../utils/date-util.js';

export default class HistoryEntry {
  constructor({ id, createdAt, updatedAt, version }) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.version = version;

    this.createElement();
  }

  createElement() {
    const createdAtTd = createTd(formatISOString(this.createdAt));
    const updatedAtTd = createTd(formatISOString(this.updatedAt));
    const versionTd = createTd(this.version);
    const deleteButton = $el('button', {
      textContent: '삭제',
      onclick: () => {
        alert('삭제 테스트');
      },
    });

    const createTd = (content) => $el('td', { textContent: content });

    const createTr = () =>
      $el('tr', [createdAtTd, updatedAtTd, versionTd, deleteButton]);

    this.element = createTr();
  }

  getElement() {
    return this.element;
  }
}
