const express = require("express");
const router = express.Router();

const { validate } = require("express-validation");
const validation = require("../validations/auth.validation");

const controller = require("../controllers/auth.controller");

router.post("/login", validate(validation.login), controller.login);
router.post("/register", validate(validation.register), controller.register);

module.exports = router;
