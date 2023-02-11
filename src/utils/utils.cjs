const crypto = require("crypto");

// Fuction utils to hash some text with Sha256 algorithm
function hashText(secret, text) {
    const sha256Hasher = crypto.createHmac("sha256", secret);
    return sha256Hasher.update(text).digest("hex");
}

module.exports = { hashText } 
