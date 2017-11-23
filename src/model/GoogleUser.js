'use strict';
const GoogleUser = /** @class */ (function () {
    function GoogleUser(receivedGUser) {
        this.accessToken = receivedGUser.accessToken;
        this.accessTokenExpirationDate = receivedGUser.accessTokenExpirationDate;
        this.email = receivedGUser.email;
        this.familyName = receivedGUser.familyName;
        this.givenName = receivedGUser.givenName;
        this.id = receivedGUser.id;
        this.idToken = receivedGUser.idToken;
        this.name = receivedGUser.name;
        this.photo = receivedGUser.photo;
        this.serverAuthCode = receivedGUser.serverAuthCode;
    }
    return GoogleUser;
}());

export default GoogleUser;