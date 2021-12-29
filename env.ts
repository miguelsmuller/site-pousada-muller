/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = './src/environments/environment.prod.ts';
const expPatch = './src/environments/environment.ts';

const file = fs.readFileSync(expPatch, 'utf8');

console.log();

const regEx = /(\w+)(\s?\:\s?)(\w+|''),?/gm;
const envConfigFile = file.replace(regEx, (match: string, attr: string, space: string, value: string) => {
  const envVar = attr
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();

  const rtn = `${attr}: '${process.env[envVar]}',`;
  return rtn;
});
console.log(colors.grey(envConfigFile));

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
  }
});
