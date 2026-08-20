import { access, readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const requiredFiles = [
  'index.html',
  'src/main.js',
  'src/styles/variables.css',
  'src/styles/base.css',
  'src/styles/layout.css',
  'src/styles/components.css',
  'README.md',
  'CLAUDE.md',
  'docs/00-setup/README.md',
  'docs/01-basic/README.md',
  'docs/02-figma/README.md',
  'docs/03-advanced/README.md',
  'instructor/prep-checklist.md',
  'answer/README.md',
  'workshop-assets/advanced/skill/.claude/skills/ui-review/SKILL.md',
  'workshop-assets/advanced/agent/.claude/agents/ui-reviewer.md',
  'workshop-assets/advanced/hook/.claude/settings.json',
];
const checkStarterState = process.argv.includes('--starter');

const results = [];

const check = async (label, task) => {
  try {
    await task();
    results.push({ label, ok: true });
  } catch (error) {
    results.push({ label, ok: false, detail: error.message });
  }
};

await check('教材の必須ファイル', async () => {
  await Promise.all(requiredFiles.map((file) => access(file)));
});

await check(checkStarterState ? 'LPの開始状態' : 'LPの必須セクション', async () => {
  const html = await readFile('index.html', 'utf8');
  const requiredSections = ['id="features"', 'id="workflow"', 'id="cta"'];
  const missingSection = requiredSections.find((section) => !html.includes(section));

  if (missingSection) throw new Error(`${missingSection} が見つかりません`);
  if (checkStarterState && /id=["'](?:faq|testimonials)["']/.test(html)) {
    throw new Error('FAQまたはTestimonialsが開始状態へ追加されています');
  }
});

await check('CSS Variables', async () => {
  const css = await readFile('src/styles/variables.css', 'utf8');
  const requiredVariables = ['--color-ink', '--color-lime', '--space-4', '--radius-md'];
  const missingVariable = requiredVariables.find((variable) => !css.includes(variable));
  if (missingVariable) throw new Error(`${missingVariable} が見つかりません`);
});

await check('JavaScriptの構文', async () => {
  const scripts = [
    'src/main.js',
    'scripts/validate.mjs',
    'scripts/workshop-check.mjs',
    'scripts/install-advanced.mjs',
    'scripts/check-links.mjs',
  ];
  for (const script of scripts) {
    const result = spawnSync(process.execPath, ['--check', script], { encoding: 'utf8' });
    if (result.status !== 0) throw new Error(`${script}: ${result.stderr.trim() || '構文エラーがあります'}`);
  }
});

await check('共有設定のJSON', async () => {
  const files = ['package.json', 'workshop-assets/advanced/hook/.claude/settings.json'];
  for (const file of files) JSON.parse(await readFile(file, 'utf8'));
});

await check('Markdownのローカルリンク', async () => {
  const result = spawnSync(process.execPath, ['scripts/check-links.mjs'], {
    encoding: 'utf8',
  });
  if (result.status !== 0) throw new Error(result.stderr.trim() || result.stdout.trim());
});

await check('本番ビルド', async () => {
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const result = spawnSync(npmCommand, ['run', 'build'], {
    encoding: 'utf8',
    stdio: 'pipe',
  });
  if (result.status !== 0) throw new Error(result.stderr.trim() || result.stdout.trim());
});

for (const result of results) {
  console.log(`${result.ok ? '✓' : '✗'} ${result.label}`);
  if (!result.ok) console.log(`  ${result.detail}`);
}

if (results.some((result) => !result.ok)) process.exit(1);

console.log('\n検証はすべて通りました。');
