const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	title: String,
	punchline: String,
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;