const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const config = require("../config");
const apiRouter = require("../routes");
const errorHandler = require("../middlewares/errorHandler");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get(`${config.api}/`, (req, res) => {
	return res.json({ message: "Hello!" });
});

app.use(`${config.api}/`, apiRouter);

app.use(errorHandler.handleError);

exports.start = () => {
	app.listen(config.port, (err) => {
		if (err) {
			console.error(`Error ${err}`);
			process.exit(-1);
		}

		console.log(`Server ready at http://localhost:${config.port} 🚀`);
	});
};
