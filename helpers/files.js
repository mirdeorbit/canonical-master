const fs = require('fs');
const promiseFs = require('fs').promises;

exports.pipeFile = (path, res) => {
  const readStream = fs.createReadStream(path);

  readStream.on('open', () => {
    readStream.pipe(res);
  });

  return new Promise((resolve, reject) => {
    readStream.on('error', reject);

    readStream.on('end', resolve);
  });
};

exports.readJson = async (path) => {
  const fileContent = await promiseFs.readFile(path);
  return JSON.parse(fileContent);
};
