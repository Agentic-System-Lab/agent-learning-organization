# AGENTS.md

This repository is a one-page site, 打造 AI Agent 學習型工程團隊 (Building an AI Agent Learning Engineering Team): a
playbook for a small AI agent engineering team to become a learning organization. GitHub Pages serves `main` as it is
(`.nojekyll` turns off Jekyll) at <https://agentic-system-lab.github.io/agent-learning-organization/>, so a push to
`main` is a deploy. The repository is public, and so is every file in it.

## Files

- `index.html`: the page, its styles and the language switch. Every translated piece of text carries a `data-i18n`
  key (`data-i18n-aria` for an `aria-label`), and the Chinese in the markup is only what shows before the script runs.
  A few labels are the same in both languages and have no key: the eyebrow, the five capability names (Sense …
  Transfer), the mechanism names in the table's first column, the 中文/EN buttons and the footer.
- `i18n.js`: the page's text, in `zh-Hant` and `en`, under the same keys. The page opens in Chinese. `?lang=en` or
  `?lang=zh` picks a language, and every load saves the language shown in `localStorage` under `alo-lang`, so a reader
  who once came in through `?lang=en` gets English at the bare URL too. Links meant for Chinese readers use `?lang=zh`
  for that reason.
- `README.md` (English, the default on GitHub) and `README.zh-TW.md` (Traditional Chinese): the main points of the page,
  with the same sections in the same order, then how to preview and test.
- `tests/`: Node's built-in test runner, no dependencies.

## Commands

```bash
node --test tests/*.test.mjs   # Node.js 18 or newer
python3 -m http.server 8000    # keeps running; preview at http://localhost:8000/?lang=zh and /?lang=en
```

## Keeping things in step

- A change to the page's text goes into both languages in `i18n.js` and, when it touches a point the READMEs cover,
  into both READMEs, in the same commit. The tests check that both dictionaries have the same keys, that every key the
  page uses exists, that the two READMEs have the same shape section by section (headings, list items, table rows,
  quotes), and that they link each other and the site.
- Check the page at phone width as well (`index.html` breaks at 860px and 520px); `tests/mobile-layout.test.mjs` pins
  the learning cycle's and the table's mobile layout.
- The org homepage (<https://agentic-system-lab.github.io/>, English and `/zh/`, from the homepage's own repo) and the
  public org profile (`profile/README.md` in Agentic-System-Lab/.github) describe this page under Learning together.
  If what the page is about changes, update them too.

## Writing

- Chinese is Traditional Chinese with Taiwan usage, with a space between Chinese and Latin letters or numbers and
  full-width punctuation. Engineering terms the page keeps in English (eval, trace, baseline, hypothesis, harness and
  the like) stay in English in both READMEs.
- Commit messages are English, with an imperative subject that says what changed; add a `Co-Authored-By:` line when an
  agent wrote the change.
