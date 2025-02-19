import chalk from "chalk";
import { existsSync } from 'fs';
import { join } from 'path';
import { readdir } from 'fs/promises';
import { stat } from 'fs/promises';

const extractName = (): { names?: string[] } => {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    const [arg] = args;

    return { names: arg.split(',') };
  }
  return { names: [] };
};

const start = async (): Promise<void> => {
  const { names } = extractName();
  const srcDir = join(__dirname);

  const folders = await readdir(srcDir);
  for (const folder of folders) {
    if (names.length > 0 && !names.includes(folder)) {
      continue;
    }
    const indexPath = join(srcDir, folder, 'index.ts');

    try {
      if (existsSync(indexPath)) {
        const fileStat = await stat(indexPath);
        if (fileStat.isFile()) {
          console.log(`Executing ${indexPath}...`);
          const start = performance.now();
          await import(indexPath);
          const end = performance.now();
          console.log(
            chalk.bold(
              chalk.red(
                `\nExecution time: ${chalk.white((end - start).toFixed(2))} milliseconds\n`
              )
            )
          );
        }
      }
    } catch (err) {
      // Ignore errors if the file doesn't exist
      if (err.code !== 'ENOENT') {
        console.error(`Error processing ${indexPath}:`, err);
      }
    }
  }

  console.log(srcDir, names);
};

start();
