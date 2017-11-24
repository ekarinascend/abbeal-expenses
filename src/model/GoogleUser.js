'use strict';
export default class GoogleUser {
    constructor({accessToken, accessTokenExpirationDate, email, familyName, givenName, id, idToken, name, photo, serverAuthCode}) {
        this.accessToken = accessToken;
        this.accessTokenExpirationDate = accessTokenExpirationDate;
        this.email = email;
        this.familyName = familyName;
        this.givenName = givenName;
        this.id = id;
        this.idToken = idToken;
        this.name = name;
        this.photo = photo;
        this.serverAuthCode = serverAuthCode;
    }
}