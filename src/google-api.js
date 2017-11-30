import Config from './config';

const GDriveUrl = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
const GVisionUrl = 'https://vision.googleapis.com/v1/images:annotate';

async function uploadFile(token, { path, base64 }) {
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

  const body = `
${delimiter}
Content-Type: application/json; charset=UTF-8\n
${JSON.stringify(metadata)}
${delimiter}
Content-Type: ${contentType}
Content-Transfer-Encoding: base64\n
${base64}
${closeDelimiter}
`;

  const response = await fetch(GDriveUrl, {
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

async function ocrFile(content) {
  const body = JSON.stringify({
    requests: [
      {
        image: { content },
        features: [
          { type: 'DOCUMENT_TEXT_DETECTION' },
        ],
      },
    ],
  });

  const response = await fetch(GVisionUrl, {
    body,
    method: 'POST',
    headers: new Headers({
      Authorization: `Bearer ${Config.visionApiToken}`,
      'Content-Type': 'application/json',
    }),
  });

  const json = await response.json();
  if (response.ok) {
    return json;
  }

  throw new Error(json.error.message);
}

export {
  uploadFile,
  ocrFile,
};
