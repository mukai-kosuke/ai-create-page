import { access, copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const stages = ['memory', 'skill', 'agent', 'hook'];
const requestedStage = process.argv[2];

if (!requestedStage || ![...stages, 'all'].includes(requestedStage)) {
  console.error('使い方: npm run workshop:advanced:install -- <memory|skill|agent|hook|all>');
  process.exit(1);
}

const root = fileURLToPath(new URL('..', import.meta.url));
const selectedStages = requestedStage === 'all' ? stages : [requestedStage];

const pathExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const copyTree = async (source, destination) => {
  const { readdir } = await import('node:fs/promises');
  const entries = await readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = join(source, entry.name);
    const destinationPath = join(destination, entry.name);

    if (entry.isDirectory()) {
      await mkdir(destinationPath, { recursive: true });
      await copyTree(sourcePath, destinationPath);
      continue;
    }

    await mkdir(dirname(destinationPath), { recursive: true });

    if (await pathExists(destinationPath)) {
      const [existing, incoming] = await Promise.all([
        readFile(destinationPath),
        readFile(sourcePath),
      ]);

      if (existing.equals(incoming)) {
        console.log(`= ${relative(root, destinationPath)} は導入済みです`);
        continue;
      }

      throw new Error(`${relative(root, destinationPath)} は既存内容と異なるため上書きしません`);
    }

    await copyFile(sourcePath, destinationPath);
    console.log(`+ ${relative(root, destinationPath)}`);
  }
};

try {
  for (const stage of selectedStages) {
    const source = join(root, 'workshop-assets', 'advanced', stage);
    await copyTree(source, root);
  }
  console.log(`\nAdvancedの「${requestedStage}」を有効にしました。`);
} catch (error) {
  console.error(`\n導入を中止しました: ${error.message}`);
  process.exit(1);
}
