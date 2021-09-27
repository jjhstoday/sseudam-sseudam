import fs from 'fs';
import { resolve } from 'path';

const basePath = resolve();

const filenames = {
  books: resolve(basePath, 'src/db/books.json'),
  sentences: resolve(basePath, 'src/db/sentences.json')
};

export const readDB = target => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'));
  } catch (err) {
    console.error(err);
  }
};

export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};
