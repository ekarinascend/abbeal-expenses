import { readFile } from 'react-native-fs';

// eslint-disable-next-line
const logError = message => console.error('ERROR: ', message);

async function readFileAsBase64(path) {
  const data = await readFile(path, 'base64').catch((error) => {
    logError(error);
    throw error;
  });
  return data;
}

export {
  logError,
  readFileAsBase64,
};
