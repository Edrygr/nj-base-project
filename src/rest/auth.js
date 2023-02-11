const express = require("express");
const cors = require('cors');
const utils = require('../utils/utils.cjs');
const jwt = require('jsonwebtoken');

const Register = require('../model/register_user.cjs');
const Login = require('../model/login.cjs');
const LoginResponse = require('../model/login_response.cjs');


const router = express.Router();
router.post("/signup", (req, res) => {
    let register = new Register(req.body)

    if (!(register.user && register.password)) {
        return res.status(400).send("All inputs are required");
    }

    register.password = utils.hashText(process.env.TOKEN_KEY, register.password)

    const token = jwt.sign(
        { user: register.user },
        process.env.TOKEN_KEY,
        {
            expiresIn: process.env.TOKEN_EXP,
        }
    );

    register.jwt = token


    res.status(200).json(register)
})

router.post("/login", (req, res) => {
    let login = new LoginResponse(req.body)

    if (!(login.user && login.password)) {
        return res.status(400).send("All inputs are required");
    }

    const token = jwt.sign(
        { user: login.user },
        process.env.TOKEN_KEY,
        {
            expiresIn: process.env.TOKEN_EXP,
        }
    );

    res.status(200).json({
        jwt: token,
        user: login.user
    })
})

module.exports = router