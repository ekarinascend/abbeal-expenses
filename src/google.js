import { readFile } from 'react-native-fs';

const DRIVE_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';

const readFileAsBase64 = async function readFileAsBase64(filePath) {
  const data = await readFile(filePath, 'base64').catch((err) => {
    console.log('read file error', err);
    throw err;
  });
  return data;
};

class GoogleApi {
  constructor(token) {
    this.accessToken = token;
  }

  uploadFile = async (filePath) => {
    const file = await readFileAsBase64(filePath);

    const response = await fetch(DRIVE_URL, {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${this.accessToken}`,
        'Content-Type': 'image/jpg',
        // 'Content-Length': '100', // Get content length ???
      }),
      body: file,
    });

    console.log(response);

    if (response.status !== 200) {
      throw new Error('bad google api request');
    }

    return response;
  }

  ocrFile = async () => {
    // TODO
  }
}

export default GoogleApi;
