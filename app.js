const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");

const users = require("./models/users.js");
const post = require("./models/post.js");
// const
mongoose.set("strictQuery", true);
main().catch(err => console.log(err));
async function main() {
	await mongoose.connect(
		"mongodb+srv://aditya:aditya123@project.0evhbyo.mongodb.net/?retryWrites=true&w=majority&appName=Project"
	);
	console.log("Connected to database");
}

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	const threads = res.render("./appPages/signUp.ejs");
});

app.get("/home", (req, res) => {
	res.render("home.ejs");
});

app.get("/forum", (req, res) => {
	res.render("./appPages/forum.ejs");
});

app.get("/home", (req, res) => {
	console.log("Got the request");
	res.render("./home.ejs");
});

app.post("/account/create", async (req, res) => {
	const user = new users(req.body);
	await user.save();
	res.redirect("/home");
});

app.listen(5000, () => {
	console.log("Serving on port 5000!");
});
