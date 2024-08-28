import { $el } from '../../common.js';
import HistoryEntry from './HistoryEntry.js';
import { generateDummyData } from '../../utils/dummy-util.js';

export default class HistoryItem {
  constructor({ id, title, createdAt, updatedAt, entries }) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    // this.entries = entries;

    this.createDummyData();
    this.createElement();
  }

  createElement() {
    const titleEl = $el('h1', {
      textContent: this.title,
      style: {},
    });

    const header = $el(
      'div',
      {
        style: {
          display: 'flex',
        },
      },
      [titleEl],
    );

    const entryTableHeader = $el('thead', [
      $el('th', { textContent: '생성일자' }),
      $el('th', { textContent: '수정일자' }),
      $el('th', { textContent: '버전명' }),
      $el('th', { textContent: '' }),
    ]);

    const entryTableBody = $el(
      'tbody',
      this.entries.map((entry) => entry.getElement()),
    );

    const entryTable = $el(
      'table',
      { style: { width: '100%', 'text-align': 'center' } },
      [entryTableHeader, entryTableBody],
    );

    this.element = $el('div', [header, entryTable]);
  }

  createDummyData() {
    this.entries = generateDummyData().map((entry) => new HistoryEntry(entry));
  }

  getElement() {
    return this.element;
  }
}
