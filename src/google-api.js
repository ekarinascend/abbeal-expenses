import { readFile } from 'react-native-fs';

const DRIVE_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';

async function uploadFile(token, path) {
  const boundary = 'abbeal_expense';
  const delimiter = `--${boundary}`;
  const closeDelimiter = `--${boundary}--`;

  const contentType = 'image/jpeg';
  const metadata = {
    name: path.split('/').pop(),
    mimeType: contentType,
    // TODO use per user folder id
    parents: ['0BxQIvF6inc-6c2tXZW5FUUROdFE'],
  };

  const base64Data = await readFile(path, 'base64');
  const body = `
${delimiter}
Content-Type: application/json; charset=UTF-8\n
${JSON.stringify(metadata)}
${delimiter}
Content-Type: ${contentType}
Content-Transfer-Encoding: base64\n
${base64Data}
${closeDelimiter}
`;

  const response = await fetch(DRIVE_URL, {
    body,
    method: 'POST',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      'Content-Type': `multipart/related; boundary=${boundary}`,
      'Content-Length': body.length,
    }),
  });

  const json = await response.json();
  if (response.ok) {
    return json;
  }

  throw new Error(json.error.message);
}

async function ocrFile(token, id) {
  console.log(id);
}

export {
  uploadFile,
  ocrFile,
};
