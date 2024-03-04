const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Address potential schema field requirements or validation:
const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		lowercase: true,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	batch: {
		type: Number,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		select: false,
	},
});

// Optionally add timestamps for automatic creation and update timestamps:
userSchema.timestamps({timestamps: true});
module.exports = mongoose.model("User", userSchema);
