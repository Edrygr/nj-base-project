const crypto = require("crypto");

// Fuction utils to hash some text with Sha256 algorithm
function hashText(secret, text) {
    const sha256Hasher = crypto.createHmac("sha256", secret);
    return sha256Hasher.update(text).digest("hex");
}

function getRandomSalt() {
    let length = 50;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

module.exports = { hashText, getRandomSalt }
