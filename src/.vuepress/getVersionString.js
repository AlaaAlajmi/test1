const
  { execSync } = require('child_process'),
  path = require('path');

const currentDir = __dirname;

let docDir = path.resolve(`${currentDir}/..`);
// This variable is set if we are inside a sub-site build
if (process.env.DOC_DIR) {
  docDir = path.resolve(`${currentDir}/../../../${process.env.DOC_DIR}`);
}

let repoDir = path.resolve(`${currentDir}/../..`);
// This variable is set if we are inside a sub-site build
if (process.env.DOC_DIR) {
  repoDir = path.resolve(`${currentDir}/../../../..`);
}

const package = require(`${repoDir}/package.json`);
const repository = package.repository ? package.repository.url : package.name;
const commit = execSync(`cd ${repoDir} && git rev-parse HEAD`, { encoding: 'utf8' }).replace('\n', '');

const versionString = `${repository}@${commit}`;

module.exports = versionString;