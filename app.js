const express = require("express");
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
module.exports = app

// required files for diferente rests api services
const routerUser = require('./src/rest/user_rest')
const routerwallet = require('./src/rest/wallet_rest')
const routerAuth = require('./src/rest/auth')


app.use((req, res, next) => {
	const excludePaths = process.env.EXCLUDE_SECURITY_PATHS.split(',')
	if (!excludePaths.includes(req.path)) {
		let token = req.header('authorization').split('Bearer ')[1];
		console.log(token)
		if (!jwt) {
			return res.status(401).send({ msg: 'Access Denied' });
		}
		try {
			const decoded = jwt.verify(token, process.env.TOKEN_KEY);
			req.user = decoded;
		} catch (err) {
			console.log(err)
			return res.status(403).send({ msg: 'Access Denied' });
		}
	}

	next();
})

app.use('/user', routerUser)
app.use('/wallet', routerwallet)
app.use('/auth', routerAuth)

//end required files for rest api services

// startinf services on configured port on env file
app.listen(process.env.PORT, () => {
	console.log("API Server is running on port: " + process.env.PORT);
	console.log("Active Profile: " + process.env.ENV_NAME);
});
