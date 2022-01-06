const httpStatus = require("http-status");

exports.handleError = (err, _req, res, _next) => {
	if (err.name === "UnauthorizedError") {
		return res.status(httpStatus.UNAUTHORIZED).json({
			error: err.message,
		});
	}

	res.status(httpStatus.INTERNAL_SERVER_ERROR);
	res.json({ error: err.message });
	res.end();
};
