const express = require("express");


const router = express.Router();
router.get("/messages", (req, res) => {
    console.info("test")
    res.end()
})

module.exports = router