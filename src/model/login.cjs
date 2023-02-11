class Login {
    user;
    password;

    constructor(json) {
        Object.assign(this, json);
    }

}

module.exports = Login;