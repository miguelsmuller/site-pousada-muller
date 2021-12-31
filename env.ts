/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config();

const targetLocal = './src/environments/environment.ts';
const targetProd = './src/environments/environment.prod.ts';
const targetExep = './src/environments/environment.exp.ts';

const file = fs.readFileSync(targetExep, 'utf8');

const regEx = /(\w+)\s?\:\s?(?:\w+|'.*'),?/gm;
const envConfigFile = file.replace(regEx, (_match: string, attr: string) => {
  const envVar = attr
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();

  const rtn = `${attr}: '${process.env[envVar]}',`;
  return rtn;
});

if (!fs.existsSync(targetLocal)) {
  writeFileUsingFS(targetLocal, envConfigFile);
}

writeFileUsingFS(targetProd, envConfigFile);

function writeFileUsingFS(targetPath, environmentFileContent) {
  fs.writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== '') {
      console.log(colors.magenta(`Environment file generated correctly at ${targetPath}`));
    }
  });
}
