const expressJwt = require("express-jwt");

const config = require("../config");

function authJwt() {
	const secret = config.secret;
	const api = config.api;

	return expressJwt({
		secret,
		algorithms: ["HS256"],
	}).unless({
		path: [`${api}/`, `${api}/auth/login`, `${api}/auth/register`],
	});
}

module.exports = authJwt;
