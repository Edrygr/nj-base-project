class LoginResponse {
    user;
    jwt;

    constructor(json) {
        Object.assign(this, json);
    }

}

module.exports = LoginResponse;