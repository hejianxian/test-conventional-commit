const version = require('./package.json').version;
const cc = require('conventional-changelog');

const file = `./RELEASE_NOTE_${version}.md`;
const fileStream = require('fs').createWriteStream(file);

cc({
  preset: 'angular',
  pkg: {
    transform (pkg) {
      pkg.version = `v${version}`;
      return pkg;
    },
  },
  releaseCount: 3,
}).pipe(fileStream).on('close', () => {
  console.log(`Generated release note at ${file}`);
});
