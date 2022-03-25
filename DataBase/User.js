const { model, Schema } = require("mongoose");

const schema = new Schema({
	account: {
		required: true,
		type: String,
	},

	age: {
		required: true,
		type: Number,
	},

	email: {
		required: true,
		type: String,
	},

	fullName: {
		required: true,
		type: String,
	},

	password: {
		required: true,
		type: String,
	},
});

module.exports = {
	User: model("User", schema),
};
