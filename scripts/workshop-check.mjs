import { access } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const skipClaude = process.argv.includes('--skip-claude');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const command = (name, args = ['--version']) => {
  const executable = process.platform === 'win32' && name === 'npm' ? 'npm.cmd' : name;
  return spawnSync(executable, args, { encoding: 'utf8', shell: false });
};

const results = [];
const addResult = (label, ok, detail = '') => results.push({ label, ok, detail });
const commandOutput = (result) => result.stdout?.trim() || result.stderr?.trim() || '';

const [major, minor] = process.versions.node.split('.').map(Number);
const supportedNode = (major === 20 && minor >= 19) || major >= 22;
addResult('Node.js', supportedNode, `v${process.versions.node}（20.19以上、または22.12以上が必要）`);

const npmResult = command('npm');
addResult('npm', npmResult.status === 0, commandOutput(npmResult));

const gitResult = command('git');
addResult('Git', gitResult.status === 0, commandOutput(gitResult));

if (skipClaude) {
  addResult('Claude Code', true, 'チェックを省略しました');
} else {
  const claudeResult = command('claude');
  addResult('Claude Code', claudeResult.status === 0, commandOutput(claudeResult) || 'コマンドが見つかりません');
}

try {
  await access('node_modules/vite/package.json');
  addResult('依存パッケージ', true, 'インストール済み');
} catch {
  addResult('依存パッケージ', false, '`npm install` を実行してください');
}

if (results.find((result) => result.label === '依存パッケージ')?.ok) {
  const buildResult = spawnSync(npmCommand, ['run', 'build'], {
    encoding: 'utf8',
    stdio: 'pipe',
  });
  addResult('本番ビルド', buildResult.status === 0, buildResult.status === 0 ? '成功' : buildResult.stderr.trim());
} else {
  addResult('本番ビルド', false, '依存パッケージの準備後に再実行してください');
}

console.log('\nClaude Code Workshop 事前チェック\n');

for (const result of results) {
  console.log(`${result.ok ? '✓' : '✗'} ${result.label}${result.detail ? ` — ${result.detail}` : ''}`);
}

const failed = results.filter((result) => !result.ok);

if (failed.length > 0) {
  console.log('\n未完了の項目があります。docs/00-setup/README.md を確認してください。');
  process.exit(1);
}

console.log('\n準備完了です。`npm run dev` と `claude` をそれぞれ起動してください。');
