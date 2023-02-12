const express = require("express");
const utils = require('../utils/utils.cjs');
const jwt = require('jsonwebtoken');
const Register = require('../model/register_user.cjs');
const loginResponse = require('../model/login_response.cjs');
const Login = require('../model/login.cjs');
const userRepo = require('../repository/user_repo.cjs');

const router = express.Router();
router.post("/signup", (req, res) => {
    let register = new Register(req.body)

    if (!(register.user && register.password)) {
        return res.status(400).send("All inputs are required");
    }

    let salt = utils.getRandomSalt()
    register.password = utils.hashText(salt, register.password)

    userRepo.insertUsers(register.user, register.password,salt).then( data =>{
        return res.status(200).json()
    }).catch(err =>{
        console.info(err)
        return res.status(412).json("Error");
    })
})

router.post("/login", (req, res) => {
    let login = new Login(req.body)

    if (!(login.user && login.password)) {
        return res.status(400).send("All inputs are required");
    }

    userRepo.findByName(login.user).then(value => {
        return res.status(200).json(value)
    }).catch(err =>{
        console.info(err)
        return res.status(403).json("Error");
    })

    const token = jwt.sign(
            { user: login.user },
            process.env.TOKEN_KEY,
            {
                expiresIn: process.env.TOKEN_EXP,
            }
            );

})

module.exports = router