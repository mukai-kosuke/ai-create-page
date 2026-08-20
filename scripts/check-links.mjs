import { access, readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

const ignoredDirectories = new Set(['.git', 'dist', 'node_modules']);
const markdownFiles = [];

const collectMarkdown = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const path = join(directory, entry.name);
    if (entry.isDirectory()) await collectMarkdown(path);
    if (entry.isFile() && entry.name.endsWith('.md')) markdownFiles.push(path);
  }
};

await collectMarkdown('.');

const failures = [];
const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;

for (const file of markdownFiles) {
  const content = await readFile(file, 'utf8');

  for (const match of content.matchAll(linkPattern)) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, '');
    if (/^(?:https?:|mailto:|#)/.test(rawTarget)) continue;

    const targetWithoutAnchor = rawTarget.split('#')[0];
    if (!targetWithoutAnchor) continue;

    const target = resolve(dirname(file), decodeURIComponent(targetWithoutAnchor));

    try {
      await access(target);
    } catch {
      failures.push(`${file}: ${rawTarget}`);
    }
  }
}

if (failures.length > 0) {
  console.error('リンク先が見つかりません:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Markdown ${markdownFiles.length}ファイルのローカルリンクを確認しました。`);
