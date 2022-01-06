const httpStatus = require("http-status");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const config = require("../config");

exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(httpStatus.UNAUTHORIZED)
				.json({ message: "Email or Password invalid" });
		}

		const passwordCheck = await bcrypt.compare(password, user.password);
		if (!passwordCheck) {
			return res
				.status(httpStatus.UNAUTHORIZED)
				.json({ message: "Email or Password invalid" });
		}

		const token = jwt.sign(
			{
				userId: user._id,
			},
			config.secret,
			{
				expiresIn: "1d",
			}
		);

		return res
			.status(httpStatus.OK)
			.json({ user: { email: user.email, name: user.name, token: token } });
	} catch (err) {
		next(err);
	}
};

exports.register = async (req, res, next) => {
	try {
		const { email, name, password } = req.body;

		const existingAccount = await User.findOne({ email });
		if (existingAccount) {
			return res
				.status(httpStatus.UNPROCESSABLE_ENTITY)
				.json({ message: `Account already exists for ${email}` });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = new User({
			email,
			name,
			password: hashedPassword,
		});
		await user.save();

		return res.status(httpStatus.CREATED).json({ message: "Ok" });
	} catch (err) {
		next(err);
	}
};
