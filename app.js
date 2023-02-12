const express = require("express");
const pool = require('./src/db/mariadb_connection.cjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const winston = require('winston');
const expressWinston = require('express-winston');

const app = express();
app.use(express.json());
module.exports = app

// required files for diferente rests api services
const routerUser = require('./src/rest/user_rest')
const routerAuth = require('./src/rest/auth')

//loggin with Winston
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
            ),
    meta: true,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: true,
    ignoreRoute: function (req, res) { return false; }
}));
app.use((req, res, next) => {
	const excludePaths = process.env.EXCLUDE_SECURITY_PATHS.split(',')
	if (!excludePaths.includes(req.path)) {
		let token = req.header('authorization').split('Bearer ')[1];
		if (!jwt) {
			return res.status(401).send({ msg: 'Access Denied' });
		}
		try {
			const decoded = jwt.verify(token, process.env.TOKEN_KEY);
			req.user = decoded;
		} catch (err) {
			console.warn(err)
			return res.status(403).send({ msg: 'Access Denied' });
		}
	}

	next();
})
app.use('/user', routerUser)
app.use('/auth', routerAuth)
app.use(cors)
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
            ),
    meta: false,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
}));

//end required files for rest api services

// startinf services on configured port on env file
app.listen(process.env.PORT, () => {
	console.info("API Server is running on port: " + process.env.PORT);
	console.info("Active Profile: " + process.env.ENV_NAME);
    pool.processLineByLine()
});
