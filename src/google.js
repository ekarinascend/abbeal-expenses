const driveUrl = 'https://www.googleapis.com/upload/drive/v3?uploadType=media';

const uploadFile = (authToken, filePath) => {
  console.log(filePath);

  fetch(driveUrl, {
    method: 'POST',
    headers: new Headers({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'image/jpg',
      'Content-Length': '100', // Get content length
    }),
    body: '', // Convert filePath to image base64
  });
};

export default {
  uploadFile,
};
