import { $el } from '../../common.js';
import HistoryEntry from './HistoryEntry.js';
import { generateDummyData } from '../../utils/dummy-util.js';

export default class HistoryItem {
  constructor({ id, title, createdAt, updatedAt, entries }) {
    this.id = id;
    this.title = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;

    this.createDummyData();
    this.createElement();
  }

  createElement() {
    const titleEl = $el('h3', {
      textContent: this.title,
      style: {
        cursor: 'pointer',
        flexGrow: 1,
      },
    });

    this.iconEl = $el('span', {
      textContent: '▼',
      style: {
        marginLeft: 'auto',
        fontSize: '18px',
      },
    });

    const header = $el(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          borderBottom: '1px solid #444',
          cursor: 'pointer',
        },
        onclick: () => this.toggleContent(),
      },
      [titleEl, this.iconEl],
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

    this.entryTable = $el(
      'table',
      { style: { width: '100%', textAlign: 'center', padding: '8px 0' } },
      [entryTableHeader, entryTableBody],
    );

    this.element = $el('div', {}, [header, this.entryTable]);
  }

  toggleContent() {
    const isHidden = this.entryTable.style.display === 'none';
    this.entryTable.style.display = isHidden ? 'table' : 'none';
    // 아이콘 변경
    this.iconEl.textContent = isHidden ? '▼' : '▶';
  }

  createDummyData() {
    this.entries = generateDummyData().map((entry) => new HistoryEntry(entry));
  }

  getElement() {
    return this.element;
  }
}
