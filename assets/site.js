'use strict';

const filters = document.querySelector('.publication-filters');
const papers = [...document.querySelectorAll('.paper')];

if (filters) {
  const buttons = [...filters.querySelectorAll('button[data-filter]')];
  const show = (filter) => {
    for (const paper of papers) {
      paper.hidden = filter === 'selected' && paper.dataset.selected !== 'true';
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    }
  };
  for (const button of buttons) {
    button.addEventListener('click', () => show(button.dataset.filter));
  }
  show('selected');
  filters.hidden = false;
}
