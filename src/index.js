const app = require("./services/express");
const databaseConnection = require("./services/mongoose");

databaseConnection.start();
app.start();
