const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Schema = require("./models");
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");

mongoose.set("strictQuery", true);
main().catch(err => console.log(err));
async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/test", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
}
