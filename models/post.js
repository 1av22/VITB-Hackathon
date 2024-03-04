const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User", // Updated reference to the new User schema
		required: true,
	},
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Post", PostSchema);
