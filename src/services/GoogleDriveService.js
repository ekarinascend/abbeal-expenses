class GoogleDriveService {
  user = null;

  static get FILES_LIST() {
    return 'https://www.googleapis.com/drive/v3/files';
  }

  getContent = async () => {
    this.checkUser();
    const response = await fetch(GoogleDriveService.FILES_LIST, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${this.user.accessToken}`,
      }),
    });

    if (response.ok) {
      return response.json();
    }
    // todo : silent error / we should handle google api error
    return [];
  }

  getFolderId(folder) {
    this.checkUser();
    // todo
    return `todo : this must be folderId ${folder}`;
  }

  getFolderContent(folder) { // eslint-disable-line
    this.checkUser();
    // todo
    return [];
  }

  checkUser() {
    if (!this.user) {
      throw new Error('User not defined please set a user');
    }
  }
}

export default new GoogleDriveService();
