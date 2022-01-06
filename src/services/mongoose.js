const mongoose = require("mongoose");
const config = require("../config");

exports.start = () => {
	mongoose
		.connect(config.mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("Database ready 🚀");
		})
		.catch((err) => {
			console.log(`Could not connect to database 😓\n`);
			console.log(`Reason:\n${err}`);
			process.exit(-1);
		});
};
