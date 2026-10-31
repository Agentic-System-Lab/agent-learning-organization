import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(import.meta.url);
const root = join(dirname(here), '..');
const read = (name) => readFileSync(join(root, name), 'utf8');
const SITE = 'https://agentic-system-lab.github.io/agent-learning-organization/';

const en = read('README.md');
const zh = read('README.zh-TW.md');
const html = read('index.html');

// What each `## ` section is made of, in order: list items, table rows and quotes.
function shape(md) {
  return md.split(/^## /m).slice(1).map((section) => {
    const lines = section.split('\n');
    return {
      items: lines.filter((l) => /^(- |\d+\. )/.test(l)).length,
      rows: lines.filter((l) => l.startsWith('|')).length,
      quotes: lines.filter((l) => l.startsWith('> ')).length,
    };
  });
}

function files(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const path = join(dir, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

test('the English and Chinese READMEs link to each other', () => {
  assert.match(en, /^English \| \[繁體中文\]\(README\.zh-TW\.md\)$/m);
  assert.match(zh, /^\[English\]\(README\.md\) \| 繁體中文$/m);
});

test('each README links the site in its own language', () => {
  assert.ok(en.includes(`(${SITE}?lang=en)`), 'README.md links the English site');
  assert.ok(zh.includes(`(${SITE}?lang=zh)`), 'README.zh-TW.md links the Chinese site');
});

test('both READMEs have the same shape, section by section', () => {
  const enShape = shape(en);
  assert.ok(enShape.length > 5, 'README.md has its sections');
  assert.deepEqual(shape(zh), enShape);
});

test('the page names its two languages at the site URL', () => {
  assert.ok(html.includes(`hreflang="zh-Hant" href="${SITE}"`));
  assert.ok(html.includes(`hreflang="en" href="${SITE}?lang=en"`));
});

test('no file points at the repository\'s old home under cyyeh', () => {
  const old = ['cyyeh.github.io/agent-learning-organization', 'github.com/cyyeh/agent-learning-organization'];
  for (const path of files(root)) {
    if (path === here) continue;
    const text = readFileSync(path, 'utf8');
    for (const url of old) assert.ok(!text.includes(url), `${relative(root, path)} links ${url}`);
  }
});
