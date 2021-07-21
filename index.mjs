import pug from 'pug';
import fs from 'fs/promises';
import getThemeData from './themes.mjs';
import createDebug from 'debug';
import path from 'path';

const debug = createDebug('aan_arwok_');

const DIST_DIR = './dist';
const VIEWS_DIR = './views';
const PUBLIC_DIR = './public';

const FONT_VERSION = await fs.readFile('./font-version', { encoding: 'utf8' });
debug(`Font version is ${FONT_VEERSION}`);

async function cleanDist() {
  debug('Cleaning dist');
  await fs.rm(`${DIST_DIR}/`, { recursive: true, force: true });
  await fs.mkdir(DIST_DIR);
}

async function buildPug() {
  debug('Read views');
  const viewFiles = await fs.readdir(VIEWS_DIR);
  const pugFiles = viewFiles.filter(
    (entry) => entry.endsWith('.pug') && !entry.startsWith('layout')
  );

  debug('Render views');
  pugFiles.map(async (pugFile) => {
    const themeData = getThemeData();
    const compileFn = pug.compileFile(`${VIEWS_DIR}/${pugFile}`);

    const html = compileFn({ theme: themeData, fontVersion: FONT_VERSION });

    fs.writeFile(`${DIST_DIR}/${pugFile.replace('.pug', '.html')}`, html);
  });
}

async function copyAssets() {
  debug('Copy assets');

  copyFolder(PUBLIC_DIR, DIST_DIR);
}

async function copyFolder(from, to) {
  try {
    await fs.stat(to);
  } catch (e) {
    await fs.mkdir(to);
  }

  const dirEntries = await fs.readdir(from);

  dirEntries.forEach(async (element) => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const elementStat = await fs.lstat(fromPath);

    if (elementStat.isFile()) {
      await fs.copyFile(fromPath, toPath);
    } else {
      await copyFolder(fromPath, toPath);
    }
  });
}

await cleanDist();
await buildPug();
await copyAssets();
debug('Done!');
