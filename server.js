const express = require("express");
const mongoose = require("mongoose");
const IGDB_api = require("./igdb-api");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const config = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mmo_finder", config);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
