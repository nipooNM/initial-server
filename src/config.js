require("dotenv/config");

module.exports = {
	api: process.env.API_URL || "api",
	port: process.env.PORT || 4000,
	mongoURI: process.env.MONGO_URI,
	secret: process.env.SECRET,
};
