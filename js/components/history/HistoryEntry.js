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
    // const detail = $el('div', {
    //   textContent: ` / 수정일자: ${formatISOString(this.updatedAt)} / 버전: ${
    //     this.version
    //   }`,
    // });

    const deleteButton = $el('button', {
      textContent: '삭제',
      onclick: () => {
        alert('삭제 테스트');
      },
    });

    const createTd = (content) => $el('td', { textContent: content });

    const createTr = () =>
      $el('tr', [
        createTd(formatISOString(this.createdAt)),
        createTd(formatISOString(this.updatedAt)),
        createTd(this.version),
        deleteButton,
      ]);

    this.element = createTr();
  }

  getElement() {
    return this.element;
  }
}
