/* Progressive enhancement only. Every page and every paper is readable without JavaScript. */
'use strict';
(() => {
  const tools = document.getElementById('publication-tools');
  if (!tools) return;
  const input = document.getElementById('paper-search');
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty-state');
  const papers = [...document.querySelectorAll('.publication')];
  const sections = [...document.querySelectorAll('[data-publication-section]')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  if (!input || !count || !empty || !papers.length) return;
  let currentFilter = 'all';
  const searchIndex = new Map(papers.map(paper => [paper, paper.textContent.toLocaleLowerCase()]));
  function update() {
    const terms = input.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let matches = 0;
    papers.forEach(paper => {
      const matchesType = currentFilter === 'all' || paper.dataset.kind === currentFilter;
      const matchesText = terms.every(term => searchIndex.get(paper).includes(term));
      paper.hidden = !(matchesType && matchesText);
      if (!paper.hidden) matches += 1;
    });
    sections.forEach(section => { section.hidden = !section.querySelector('.publication:not([hidden])'); });
    count.textContent = `${matches} ${matches === 1 ? 'paper' : 'papers'}`;
    empty.hidden = matches !== 0;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === currentFilter)));
  }
  buttons.forEach(button => button.addEventListener('click', () => { currentFilter = button.dataset.filter; update(); }));
  input.addEventListener('input', update);
  tools.hidden = false;
  update();
})();
