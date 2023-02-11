class Wallet {
    content;

    constructor(json) {
        Object.assign(this, json);
    }

    fromJson(json) {
        this.content = json.content;
    }
}

module.exports = Wallet;