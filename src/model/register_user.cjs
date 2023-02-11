class Register {
    user;
    password;

    constructor(json) {
        Object.assign(this, json);
    }

}

module.exports = Register;