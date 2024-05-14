import path from 'node:path';

const pathToWorkDir = path.join(process.cwd(), 'src');
export const PATH_DB = path.join(
  pathToWorkDir,
  'src',
  'scripts',
  'db',
  'db.json',
);
