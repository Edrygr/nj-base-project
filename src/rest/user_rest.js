const express = require("express");
const cors = require('cors');


const router = express.Router();
router.get("/messages", (req, res) => {
    console.log("test")
    res.end()
})

module.exports = router