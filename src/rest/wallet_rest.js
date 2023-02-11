const { v4: uuid } = require("uuid");
const express = require("express");
const cors = require('cors');
const _ = require("lodash");
const Wallet = require('../model/wallet.cjs');
const router = express.Router();

//Rest services
router.get("/", (req, res) => {
    console.log("wallet")
    res.end()
})

router.get("/outfit", (req, res) => {
    const tops = ["Black", "White", "Orange", "Navy"];
    const jeans = ["Grey", "Dark Grey", "Black", "Navy"];
    const shoes = ["White", "Grey", "Black"];

    res.json({
        top: _.sample(tops),
        jeans: _.sample(jeans),
        shoes: _.sample(shoes)
    });
});

router.get("/comments/:id", async (req, res) => {
    const id = req.params.id;
    let content;

    try {
        content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
    } catch (err) {
        return res.sendStatus(404);
    }

    res.json({
        content: content
    });
});


router.post("/comments", (req, res) => {
    const id = uuid();
    let wallet = new Wallet(req.body)

    res.status(200).json(wallet);
});


module.exports = router